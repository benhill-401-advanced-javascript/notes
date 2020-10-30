'use strict';

/**
* @constructor
*/

// const chalk = require('chalk');

// const NoteCollection = require('./model/notes-collection.js');

// class Notes {
//   constructor(obj) {
//     this.action = obj.command.action;
//     console.log(chalk.inverse.red(this.action), 'this.action')

//     this.payload = obj.command.payload;
//     console.log(chalk.inverse.red(this.payload), 'this.payload')

//     this.category = obj.command.category;
//     console.log(chalk.inverse.red(this.category), 'this.category')

//   }
//   async execute() {
//     if (this.command === 'add') {
//       return this.add();
//     }
//     if (this.command === 'list') {
//       return this.list();
//     }
//     if (this.command === 'delete') {
//       return this.delete();
//     }
//   }
//   async add() {
//     try {
//       console.log(note, 'add methods note var')
//       let note = {
//         id: this.payload,
//         note: this.category
//       }
//       let record = new NoteCollection();
//       let addedNote = await record.create(note);
//       console.log(addedNote, chalk.inverse.green('Added Note!'));

//       console.log(`Adding Note: ${note.note}`)
//     } catch (error) {
//       console.error(error, chalk.inverse.red('NOTE WAS NOT ADDED'));
//     }

//   }
//   async list() {
//     try {
//       let collection = new NoteCollection();
//       let listResult = await collection.get({ category: this.payload });

//       console.log(listResult, chalk.inverse.green('List result'));
//     } catch (error) {
//       console.error(error, chalk.inverse.red('LIST ERROR'));
//     }
//   }
//   async delete() {
//     try {

//     } catch (error) {
//       console.log(error, chalk.inverse.red('ERROR MAKING DELETION'))
//     }
//   }
// }


// module.exports = Notes;





