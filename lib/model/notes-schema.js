'use strict';


const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({
  text: {
    type: String,
    default: 'default',
    required: true
  },
  category: {
    type: String,
    default: 'default',
    required: true
  },
});

module.exports = mongoose.model('notes', noteSchema);
