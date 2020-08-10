

// 3rd party libraries
// Check whether a string is a URL, returns boolean
const isUrl = require('is-url');
// Parses command line argument options
const minimist = require('minimist');


function Input() {
  const arguments = (process.argv.slice(2));
  console.log(argv);

  this.method = this.getMethod(arguments.method);
  this.url = this.getUrl(arguments.url);
}




// Exports a constructor function
// DONE Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// On instantiation, evaluates and validates the input
// Is the command (i.e. ‘–add’) a valid command
// Is there data associated with the command
// Returns an instance containing the action to perform and the payload for the action
// for example:
// {
//   action: "add";
//   payload: "This is a really cool thing that I wanted to remember for later"
// }






