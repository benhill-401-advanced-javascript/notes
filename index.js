'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// Requires the library files you will be writing 
const mongoose = require('mongoose');
require('dotenv').config();
const minimist = require('minimist');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const input = new Input();
const note = new Notes();

if (input.valid()) {
  note.execute(input)
    .then(mongoose.disconnect);
} else {
  process.exit(9);
}

