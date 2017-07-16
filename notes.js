//console.log('Starting notes.js');
//atalhos
//ctrl p buscar arquivo
//ctrl alt shift janela direita buscar string 
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var itsDuplicate = (note, notes) => {
  var duplicateNotes = notes.filter((obj) => obj.title === note.title);

  if (duplicateNotes.length > 0) {
    return true;
  }
  return false;
};

var addNote = (title, body)  => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  if(!itsDuplicate(note, notes)){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes().filter((obj) => obj.title === title);
  return notes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((obj) => obj.title !== title);
  saveNotes(filteredNotes);

  if (notes.length !== filteredNotes.length) {
    return true;
  } else {
    return false;
  }
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};


/*module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};*/



/*module.exports.add = (a, b) => {
  return a + b;
};*/
