console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Teste'));

var filteredArray = _.uniq(['Teste','Teste',2,35]);
console.log(filteredArray);


//console.log('Result:', notes.add(9, -2));
//var user = os.userInfo();
//fs.appendFile('greetings.txt', `E ae ${user.username}! You are ${notes.age}.`);
//npm init
