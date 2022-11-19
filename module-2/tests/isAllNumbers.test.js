/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
/* eslint-disable */
const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isAllNumbers', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  it('should return true if array has only numbers', function () {
    const arrayOfRandomNumbers = [2, 7, 12, 1, 55, 32, 10];
    expect(validator.isAllNumbers(arrayOfRandomNumbers)).to.be.eql(true);
  });

  describe('check report Errors if array is NOT array', function () {
    const parameters = [
      { description: 'should return error if array is null', input: null, result: `Error: [null] is not an array` },
      { description: 'should return error if array is " "', input: ' ', result: 'Error: [ ] is not an array' },
      { description: 'should return error if array is "Asd"', input: 'Asd', result: 'Error: [Asd] is not an array' },
      { description: 'should return error if array is true', input: true, result: 'Error: [true] is not an array' },
      { description: 'should return error if array is undefined', input: undefined, result: 'Error: [undefined] is not an array' },
      { description: 'should return error if array is NaN', input: NaN, result: 'Error: [NaN] is not an array' },
      {
        description: 'should return error if array is {name: "Stas", age: 35}',
        input: { name: 'Stas', age: 35 },
        result: 'Error: [[object Object]] is not an array',
      },
      { description: 'should return error if array is ()=> false', input: () => false, result: 'Error: [() => false] is not an array' },
      { description: 'should return error if array is 1+"2"', input: 1 + '2', result: 'Error: [12] is not an array' },
      { description: 'should return error if array is "+"', input: '+', result: 'Error: [+] is not an array' },
      {
        description: 'should return error if array is Symbol',
        input: Symbol,
        result: 'Error: [function Symbol() { [native code] }] is not an array',
      },
      { description: 'should return error if array is 1+[]', input: 1 + [], result: 'Error: [1] is not an array' },
    ];

    parameters.forEach(parameter => {
      it(parameter.description, () => {
        try {
          validator.isAllNumbers(parameter.input);
          throw new Error(`[${parameter.input}] is a array`);
        } catch (error) {
          expect(error.toString()).to.be.eql(parameter.result);
        }
      });
    });
  });

  describe('should return false if array has not only numbers', function () {
    const parameters = [
      { description: 'should return false if array has Symbol', input: [Symbol, 17, 1, 55], result: false },
      { description: 'should return false if array has null', input: [null, 17, 1, 55], result: false },
      { description: 'should return false if array has "Asd"', input: ['Asd', 17, 1, 55], result: false },
      { description: 'should return false if array has true', input: [true, 17, 1, 55], result: false },
      { description: 'should return false if array has undefined', input: [undefined, 17, 1, 55], result: false },
      { description: 'should return false if array has NaN', input: [NaN, 17, 1, 55], result: false },
      {
        description: 'should return false if array has {name: "Stas", age: 35}',
        input: [{ name: 'Stas', age: 35 }, 17, 1, 55],
        result: false,
      },
      { description: 'should return false if array has () => false', input: [() => false, 17, 1, 55], result: false },
      { description: 'should return false if array has "+"', input: ['+', 17, 1, 55], result: false },
      { description: 'should return false if array has 1+[]', input: [1 + [], 17, 1, 55], result: false },
    ];

    parameters.forEach(parameter => {
      it(parameter.description, () => {
        validator.isAllNumbers(parameter.input);
        expect(validator.isAllNumbers(parameter.input)).to.be.eql(parameter.result);
      });
    });
  });
});
