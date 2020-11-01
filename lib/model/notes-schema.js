'use strict';


const mongoose = require('mongoose');


const NoteSchema = mongoose.Schema({
  text: { type: String, default: 'default', required: true },
  category: { type: String, default: 'Misc Category', required: true },
});

NoteSchema.pre('validate', function () {
  this.type = this.type.toLowerCase();
})

NoteSchema.pre('save', function () {
  this.category = this.category * 10;
})

//how to post to CLI?
NoteSchema.post('save', function () {

})

module.exports = mongoose.model('notesy', NoteSchema);

