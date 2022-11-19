/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable */
const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isNumberEven', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if number is even', function () {
    expect(validator.isNumberEven(2)).to.be.equal(true);
  });

  it('should return false if number is not even', function () {
    expect(validator.isNumberEven(5)).not.to.be.equal(true);
  });

  const parameters = [
    { description: '4 is even than should return true', input: 4, result: true },
    { description: '7 is not even than should return false', input: 7, result: false },
    { description: '0 is even than should return true', input: 0, result: true },
    { description: '8 is even than should return true', input: 8, result: true },
  ];

  parameters.forEach(parameter => {
    it(parameter.description, () => {
      const result = validator.isNumberEven(parameter.input);
      expect(result).to.be.equal(parameter.result);
    });
  });

  describe('check report Errors if variable is NOT number', function () {
    const parameters = [
      {
        description: 'should return error if variable=null is not a number',
        input: null,
        result: `Error: [null] is not of type "Number" it is of type "object"`,
      },
      {
        description: 'should return error if variable=" " is not a number',
        input: ' ',
        result: 'Error: [ ] is not of type "Number" it is of type "string"',
      },
      {
        description: 'should return error if variable="Asd" is not a number',
        input: 'Asd',
        result: 'Error: [Asd] is not of type "Number" it is of type "string"',
      },
      {
        description: 'should return error if variable=true is not a number',
        input: true,
        result: 'Error: [true] is not of type "Number" it is of type "boolean"',
      },
      {
        description: 'should return error if variable=undefined is not a number',
        input: undefined,
        result: 'Error: [undefined] is not of type "Number" it is of type "undefined"',
      },
      // { description: 'should return error if variable=NaN is not a number', input: NaN, result: 'Error: [NaN] is not of type "Number" it is of type "string"' },
      {
        description: 'should return error if variable={name: "Stas", age: 35} is not a number',
        input: { name: 'Stas', age: 35 },
        result: 'Error: [[object Object]] is not of type "Number" it is of type "object"',
      },
      {
        description: 'should return error if variable=[1,2,3] is not a number',
        input: [1, 2, 3],
        result: 'Error: [1,2,3] is not of type "Number" it is of type "object"',
      },
      {
        description: 'should return error if variable= ()=> false is not a number',
        input: () => false,
        result: 'Error: [() => false] is not of type "Number" it is of type "function"',
      },
      {
        description: 'should return error if variable=1+"2" is not a number',
        input: 1 + '2',
        result: 'Error: [12] is not of type "Number" it is of type "string"',
      },
      {
        description: 'should return error if variable="+" is not a number',
        input: '+',
        result: 'Error: [+] is not of type "Number" it is of type "string"',
      },
      {
        description: 'should return error if variable=Symbol is not a number',
        input: Symbol,
        result: 'Error: [function Symbol() { [native code] }] is not of type "Number" it is of type "function"',
      },
      {
        description: 'should return error if variable=1+[] is not a number',
        input: 1 + [],
        result: 'Error: [1] is not of type "Number" it is of type "string"',
      },
    ];

    parameters.forEach(parameter => {
      it(parameter.description, () => {
        try {
          validator.isNumberEven(parameter.input);
          throw new Error(`[${parameter.input}] is a number`);
        } catch (error) {
          expect(error.toString()).to.be.eql(parameter.result);
        }
      });
    });
  });
});
