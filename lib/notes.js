'use strict';

/**
* @constructor
*/

const NoteSchema = require('./model/notes-schema')

class Notes {
  constructor(obj) {
    this.action = obj.command.action;
    this.payload = obj.command.payload;
  }
  execute() {
    this[this.action]();
    // this[obj.command.action](obj.command);
  }
  add() {
    const note = {
      id: Date.now(),
      note: this.payload,
    }
    console.log(`Adding Note: ${note.note}`)
  }
  async list() {
    try {
      let listResult = await NoteSchema.find({ category: this.payload });
      console.log(listResult, 'List result');
    } catch (error) {
      console.error(error);
    }
  }
}


module.exports = Notes;





