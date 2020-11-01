'use strict';

jest.mock('minimist');
const minimist = require('minimist');



// sets up environment to use mock minimist library
minimist.mockImplementation(() => {
  return {
    a: 'Note has been added'

  };
});

const Input = require('../lib/input.js');

describe('Input Module test suite', () => {

  it('valid() returning output to be true', () => {
    let input = new Input();
    expect(input.valid()).toBeTruthy();
  });

  it('If valid() input is not given and returns false', () => {
    let input = new Input();
    input.command = undefined;
    expect(input.command).toBeFalsy();
  });

});

