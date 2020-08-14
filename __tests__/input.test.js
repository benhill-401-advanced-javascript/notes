'use strict';

jest.mock('minimist');
const minimist = require('minimist');

/**
* @todo for input module tests, assert, given good input:
class' valid() method returns true,
the input module creates a new instance with both action and paylod properties
given invalid input, the valid() method returns false
HINT: you'll need to mock the minimist library so you an fake a user providing good and bad input
*/

// If you find that you can't get anything to work, remember that you ran npm install --save-dev jest
// you can also try to generate basic config with jest --init

// sets up environment to use mock minimist library
minimist.mockImplementation(() => {
  return {
    action: 'note has been added',
    payload: 'correct command entered',
    note: ''
  };
});

const Input = require('../lib/input');

describe('Input Module', () => {



  it('valid() returning output to be true', () => {
    let input = new Input();
    expect(input.valid()).toBeTruthy();
  });

});

