'use strict';


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
*/


// // Requires the library files you will be writing 
// require('dotenv').config();
// const chalk = require('chalk');
// const mongoose = require('mongoose');
// const minimist = require('minimist');

// const Input = require('./lib/input.js');
// const Notes = require('./lib/notes.js');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const input = new Input();
// // console.log(input, chalk.inverse.yellow('new instance of INPUT'))
// const note = new Notes(input);
// if (input.valid()) {
//   note.execute(input)
//   // .then(mongoose.disconnect);
// }
// else {
//   process.exit(9);
// }



/**
 * @dbConnectionTest
 * @todo - Write callback function that returns conditional if connected or not
 */
// const dbConnectionTest = mongoose.connection;
// dbConnectionTest.on('error', console.error.bind(console, 'connection error:'));
// dbConnectionTest.once('open', function () {

// })
