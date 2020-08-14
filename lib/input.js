'use strict';


const minimist = require('minimist');
/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */
/**
* @todo Refactor Input constructor using E6 Classes
*/
// function Input() {
//   const args = minimist(process.argv.slice(2))
//   this.command = this.parse(args)
// }

// class Input {
//   constructor(){
//   const args = minimist(process.argv.slice(2))
//   this.command = this.parse(args)
//   }
//   parse(obj){
//     const argsFilter = {
//       a:'add',
//       add: 'add'
//     }
//     const arg Object()
//   }


// }

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2))
    this.command = this.parse(args)
  }
  parse(obj) {
    const argsFilter = {
      a: 'add',
      add: 'add'
    }
    const arg = Object.keys(obj).filter(arg => {
      return argsFilter[arg];
    })[0];
    const command = {
      action: argsFilter[arg],
      payload: obj[arg]
    }
    return command;
  }
  valid() {
    return !!(this.command.action && this.command.payload);
  }
}


// Input.prototype.parse = function (object) {
//   const argsFilter = {
//     a: 'add',
//     add: 'add'
//   }
//   const arg = Object.keys(object).filter(arg => {
//     return argsFilter[arg];
//   })[0];
//   const command = {
//     action: argsFilter[arg],
//     payload: object[arg]
//   }
//   return command;
// }

//Validates whether the CLI is receiving correct input
// Input.prototype.valid = function () {
//   return !!(this.command.action && this.command.payload);
// }

module.exports = Input;

