console.log('Starting notes.js');
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
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting the note', title);
};

var removeNote = (title) => {
  console.log('Remove the note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};


/*module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};*/



/*module.exports.add = (a, b) => {
  return a + b;
};*/
