'use strict';


const mongoose = require('mongoose');


const NoteSchema = mongoose.Schema({
  text: { type: String, default: 'default', required: true },
  category: { type: String, required: true },
});

NoteSchema.pre('validate', function () {
  this.text = this.text.toLowerCase();
  this.category = this.category.toLowerCase();
})

module.exports = mongoose.model('NoteSchema', NoteSchema);
