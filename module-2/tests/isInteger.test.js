/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
/* eslint-disable */
const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isInteger', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  it('should return true if variable has data type is number', function () {
    const variable = 0;
    expect(validator.isInteger(variable)).to.be.eql(true);
  });

  it('should return true if variable with logic has data type is number', function () {
    const variable = 1 + 3;
    expect(validator.isInteger(variable)).to.be.eql(true);
  });

  describe('check report Errors if variable is NOT number', function () {
    const parameters = [
      { description: 'should return error if variable=null is not a number', input: null, result: 'Error: [null] is not a number' },
      { description: 'should return error if variable=" " is not a number', input: ' ', result: 'Error: [ ] is not a number' },
      { description: 'should return error if variable="Asd" is not a number', input: 'Asd', result: 'Error: [Asd] is not a number' },
      { description: 'should return error if variable=true is not a number', input: true, result: 'Error: [true] is not a number' },
      {
        description: 'should return error if variable=undefined is not a number',
        input: undefined,
        result: 'Error: [undefined] is not a number',
      },
      { description: 'should return error if variable=NaN is not a number', input: NaN, result: 'Error: [NaN] is not a number' },
      {
        description: 'should return error if variable={name: "Stas", age: 35} is not a number',
        input: { name: 'Stas', age: 35 },
        result: 'Error: [[object Object]] is not a number',
      },
      {
        description: 'should return error if variable=[1,2,3] is not a number',
        input: [1, 2, 3],
        result: 'Error: [1,2,3] is not a number',
      },
      {
        description: 'should return error if variable= ()=> false is not a number',
        input: () => false,
        result: 'Error: [() => false] is not a number',
      },
      { description: 'should return error if variable=1+"2" is not a number', input: 1 + '2', result: 'Error: [12] is not a number' },
      { description: 'should return error if variable="+" is not a number', input: '+', result: 'Error: [+] is not a number' },
      {
        description: 'should return error if variable=Symbol is not a number',
        input: Symbol,
        result: 'Error: [function Symbol() { [native code] }] is not a number',
      },
      { description: 'should return error if variable=1+[] is not a number', input: 1 + [], result: 'Error: [1] is not a number' },
    ];

    parameters.forEach(parameter => {
      it(parameter.description, () => {
        try {
          validator.isInteger(parameter.input);
          throw new Error(`[${parameter.input}] is a number`);
        } catch (error) {
          expect(error.toString()).to.be.eql(parameter.result);
        }
      });
    });
  });
});
