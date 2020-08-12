'use strict';

/**
* @constructor
*/


const Notes = function (obj) {
  this.action = obj.command.action;
  this.payload = obj.command.payload;
}

Notes.prototype.execute = function () {
  this[this.action]()
}

Notes.prototype.add = function () {
  const note = {
    id: Date.now(),
    note: this.payload,
  }
  console.log(`Adding Note: ${note.note}`)
}

module.exports = Notes;
// Exports a constructor function
// function Exports(obj) {
//   this.command = obj;
// }

// // Has a prototype method called execute() that executes the correct operation, given the above object
// Exports.prototype.execute = function () {
//   return `Fetched ${this.command.url} using ${this.command.method}`
// }




// module.exports = Exports;
// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…
// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed





