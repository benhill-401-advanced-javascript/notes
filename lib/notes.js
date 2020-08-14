'use strict';

/**
* @constructor
*/

class Notes {
  constructor(obj) {
    this.action = obj.command.action;
    this.payload = obj.command.payload;
  }
  execute() {
    this[this.action]()
  }
  add() {
    const note = {
      id: Date.now(),
      note: this.payload,
    }
    console.log(`Adding Note: ${note.note}`)
  }
}


module.exports = Notes;





