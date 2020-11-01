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
  async add() {
    try {
      const note = {
        id: Date.now(),
        note: this.payload,
      }
      let notesy = new NoteSchema(note);
      let addedNote = await notesy.save();
      console.log(addedNote, 'Added Note');

      // console.log(`Adding Note: ${note.note}`)
    } catch (error) {
      console.log(error, 'NOTE WAS NOT ADDED');
    }

  }
  async list() {
    try {
      let listResult = await NoteSchema.find({ category: this.payload });
      console.log(listResult, 'List result');
    } catch (error) {
      console.error(error, 'LIST ERROR');
    }
  }
}


module.exports = Notes;





