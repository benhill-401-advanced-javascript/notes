'use strict';

const Notes = require('../lib/notes');


/**
* @todo For notes module tests:
nothing is logged to the console if htere was no command,
if the command (add) and the data (note) were both valid, assert that the console shows the output
HINT: You will need to use a spy to check the console.log as properly called
*/

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {

  it('execute() is showing a valid command', () => {
    const note = new Notes;
    note.exports
  })
})





