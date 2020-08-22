'use strict';


const mongoose = require('mongoose');


const NoteSchema = mongoose.Schema({
  text: { type: String, default: 'default', required: true },
  category: { type: String, default: 'Misc Category', required: true },
});

module.exports = mongoose.model('notesy', NoteSchema);

