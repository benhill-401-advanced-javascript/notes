'use strict';

// 3rd party libraries
// Check whether a string is a URL, returns boolean
// const isUrl = require('is-url');
// Parses command line argument options
const minimist = require('minimist');


function Input() {
  // process argv just counts spaces after we tell it where to go in CLI
  const args = minimist(process.argv.slice(2));
  console.log(args);

  // this.method = this.getMethod(args.getMethod);
  // this.url = this.getUrl(args.getUrl);
}

// Input.prototype.getUrl = function (args = {}) {
//   if (args.url) { return args.url; }
//   else if (args.u) { return args.u; }
//   else { return undefined; }
// }

// Input.prototype.getMethod = function (args = {}) {
//   if (args.method === "get") { return args.method; }
//   else { return undefined; }
// }


module.exports = Input();

// DONE Exports a constructor function
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






