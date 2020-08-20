'use strict';


const mongoose = require('mongoose');


const NoteSchema = mongoose.Schema({
  text: { type: String, required: true, enum: [] },
  category: { type: String, default: 'general', required: true },
});

module.exports = mongoose.model('notesy', NoteSchema);

