'use strict';

/**
* @constructor
*/

const chalk = require('chalk');

// const noteSchema = require('./model/notes-schema');
const NoteCollection = require('./model/notes-collection.js');

class Notes {

  async execute(obj) {
    switch (obj.command.action) {
      case 'add':
        return this.add(obj.command);
      case 'list':
        return this.list(obj.command.payload);
      case 'delete':
        return this.delete(obj.command.payload);
      default:
        return Promise.resolve();
    }
  }
  async add(obj) {
    await NoteCollection.create(obj)
      .then(dbData => {
        console.log(`
      ${chalk.bold.greenBright('Note added!')}: ${dbData.text}`);
      });
  }
  async list(catName) {
    const listResult = await NoteCollection.get(catName);
    listResult.forEach(note => {
      console.log('======================= Note ============================')
      console.log(note.text);
      console.log(`
      ${chalk.bold.blueBright('Category:')} 
      ${note.category} 
      ${chalk.bold.greenBright('ID:')} 
      ${note._id}
      `)
      console.log('=========================================================')
    })
  }
  async delete(id) {
    await NoteCollection.delete(id)
      .then(() => {
        console.log(`Deleting note: ${id}`)
      })
  }
}

module.exports = Notes;

