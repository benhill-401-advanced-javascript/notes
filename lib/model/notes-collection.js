'use strict';

const NoteSchema = require('./notes-schema');

class NoteCollection {
  get(catName) {
    return catName ? NoteSchema.find({ category: catName }) : NoteSchema.find({});
  }
  create(obj) {
    const newNote = new NoteSchema(obj);
    return newNote.save()
  }
  delete(id) {
    return NoteSchema.findOneAndDelete({ _id: id })
  }
}

module.exports = NoteCollection;
