'use strict';

// Requires the library files you will be writing (input, notes)
const Input = require('./lib/input.js');

const input = new Input();

// Instantiates an instance of an “Input” parser module
// Parses the command line input and returns the command and data
// Passes the command to the Notes library, which executes the command