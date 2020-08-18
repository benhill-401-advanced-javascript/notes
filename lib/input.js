'use strict';


const minimist = require('minimist');
/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */



class Input {
  constructor() {
    const args = minimist(process.argv.slice(2))
    this.command = this.parse(args)
  }
  parse(obj) {
    const argsFilter = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
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



module.exports = Input;

