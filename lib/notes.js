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


// const Notes = function (obj) {
//   this.action = obj.command.action;
//   this.payload = obj.command.payload;
// }

// Notes.prototype.execute = function () {
//   this[this.action]()
// }

// Notes.prototype.add = function () {
//   const note = {
//     id: Date.now(),
//     note: this.payload,
//   }
//   console.log(`Adding Note: ${note.note}`)
// }

module.exports = Notes;



// 'use strict'
// /**
//  * @constructor
//  */
// const Notes = function (object) {
//   this.action = object.command.action;
//   this.payload = object.command.payload;
// }
// Notes.prototype.execute = function () {
//   this[this.action]()
// }
// Notes.prototype.add = function () {
//   const note = {
//     id: Date.now(),
//     note: this.payload,
//   }
//   console.log(`adding note: ${note.note}`)
// }
// module.exports = Notes;



