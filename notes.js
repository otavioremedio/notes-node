console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body)  => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    //console.log(e.message);
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
