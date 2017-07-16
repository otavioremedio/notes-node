console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs
  .command('add', 'Add a new note',{
    title: {
      describe: 'Title of note',
      demand: true

    }
  })
  .help()
  .argv;
var command = argv._[0];// process.argv[2];
console.log('Command: ', command);
//console.log('Process', process.argv);
console.log('Yargs',argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (note){
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('note in use!');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Found the note');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {
    var message = notes.removeNote(argv.title) ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
  console.log('Command not recognized');
}

//console.log('Result:', notes.add(9, -2));
//var user = os.userInfo();
//fs.appendFile('greetings.txt', `E ae ${user.username}! You are ${notes.age}.`);
//npm init
//npm install lodash --save
//npm install nodemon -g
// -g significa global
//user info
//const os = require('os');
/*console.log(_.isString(true));
console.log(_.isString('Teste'));

var filteredArray = _.uniq(['Ze','Ze',2,35]);
console.log(filteredArray);*/
