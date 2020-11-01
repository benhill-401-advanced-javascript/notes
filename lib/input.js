'use strict';


const chalk = require('chalk');
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

    const argKey = Object.keys(obj).filter(argKey => {
      return argsFilter[argKey];
    })[0];

    const category = obj.c || obj.category;

    const payload = typeof obj[argKey] === 'string' ? obj[argKey] : undefined;

    const command = {
      action: argsFilter[argKey],
      payload: payload,
      category: category,
    }
    return command;
  }

  valid() {
    if (!this.command.action) {
      return false;
    }
    if (this.command.action == 'add') {
      if (!this.command.payload) {
        return false
      }
    }
    if (this.command.action == 'delete') {
      if (!this.command.payload) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Input;
