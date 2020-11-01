'use strict';

const Notes = require('../lib/notes');

jest.mock('minimist');
const minimist = require('minimist');




// sets up environment to use mock minimist library
minimist.mockImplementation(() => {
  return {
    a: 'Note has been added'

  };
});


jest.spyOn(global.console, 'log');

describe('Notes Module test suite', () => {

  it('execute() does nothing with invalid options', () => {
    const noteOne = new Notes({ command: 'add', payload: 'test' });
    return noteOne.add();
  });
});





