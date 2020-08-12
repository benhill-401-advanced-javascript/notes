'use strict';


// Parses command line argument options
const minimist = require('minimist');


function Input() {
  // process argv just counts spaces after we tell it where to go in CLI
  const args = minimist(process.argv.slice(2));

  this.command = this.parse(args);
}

Input.prototype.parse = function (obj) {
  const argsFilter = {
    a: 'add',
    add: 'add'
  }
  const arg = Object.keys(obj).filter(arg => {
    return argsFilter[arg];
  })[0];
  const command = {
    action: argsFilter[arg],
    paylod: obj[arg]
  }
  return command;
}

//Validates whether the CLI is receiving correct input
Input.prototype.validate = function () {
  return !!(this.command.action && this.command.paylod);
}

module.exports = Input;

