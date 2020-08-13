// 'use strict';

// Requires the library files you will be writing (input, notes)

const minimist = require('minimist');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const input = new Input();
const note = new Notes(input);

if (input.valid()) {
  note.execute();
} else {
  process.exit(9);
}


/*----------WHAT DO YOU WANT NOTESY TO DO?
This app will be rolled out in four phases
After phase one we will be adding features for delete and list
For Phase one all i want it to do is have the user enter in node index.js --add "enter in a command" in the command line
this will return a object in the command line when i press enter
the process.argv is the way that will track my spaces
the splice(2) is cutting out my node and index directory pathways
minimist is taking the array that i'm getting back and turning into an objec that is looking for key: value pairs
input.js is going to evaluate and validate the input from the user (--add and string that returns from input)
notes.js is going to execute the action and command into index.js which renders in the CLI


// */
// 'use strict'
// // const minimist = require('minimist');
// const Input = require('./lib/input');
// // const Note = require('./lib/notes');
// const Notes = require('./lib/notes');
// const input = new Input();
// const note = new Notes(input);
// if (input.valid()) {
//   note.execute()
// } else {
//   process.exit(9)
// }
//our notes application will accept and validate the user's input, and confirm that the note was valid.//
// As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
// As a user, I expect that the application will confirm my intent. 
// console.log(minimist(process.argv.slice(2)));
// // this is meant to restrict the amount of crap you get back. 
//npm init -y initializes the package, and creates a package.json (metadata for handling the file)
// minimist deals specifically with parsing command line stuff- returns an object instead of an array. Creates key value pairs out of your input.

