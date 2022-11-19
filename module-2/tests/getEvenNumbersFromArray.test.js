/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
/* eslint-disable */
const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('getEvenNumbersFromArray', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  it('should return an array of even numbers when provided with proper data', function () {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([2, 12, 32, 10]);
  });

  it('should return empty array', function () {
    const arrayOfRandomNumbers = [7, 17, 1, 55];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([]);
  });

  describe('check report Errors if array is NOT an array of "Numbers"', function () {
    const parameters = [
      {
        description: 'should return error if array has null',
        input: [null, 17, 1, 55],
        result: `Error: [,17,1,55] is not an array of "Numbers"`,
      },
      {
        description: 'should return error if array has " "',
        input: [' ', 17, 1, 55],
        result: 'Error: [ ,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has "Asd"',
        input: ['Asd', 17, 1, 55],
        result: 'Error: [Asd,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has true',
        input: [true, 17, 1, 55],
        result: 'Error: [true,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has undefined',
        input: [undefined, 17, 1, 55],
        result: 'Error: [,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has NaN',
        input: [NaN, 17, 1, 55],
        result: 'Error: [NaN,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has {name: "Stas", age: 35}',
        input: [{ name: 'Stas', age: 35 }, 17, 1, 55],
        result: 'Error: [[object Object],17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has ()=> false',
        input: [() => false, 17, 1, 55],
        result: 'Error: [() => false,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has 1+"2"',
        input: [1 + '2', 17, 1, 55],
        result: 'Error: [12,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has "+"',
        input: ['+', 17, 1, 55],
        result: 'Error: [+,17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has Symbol',
        input: [Symbol, 17, 1, 55],
        result: 'Error: [function Symbol() { [native code] },17,1,55] is not an array of "Numbers"',
      },
      {
        description: 'should return error if array has 1+[]',
        input: [1 + [], 17, 1, 55],
        result: 'Error: [1,17,1,55] is not an array of "Numbers"',
      },
    ];

    parameters.forEach(parameter => {
      it(parameter.description, () => {
        try {
          validator.getEvenNumbersFromArray(parameter.input);
          throw new Error(`[${parameter.input}] is a array`);
        } catch (error) {
          expect(error.toString()).to.be.eql(parameter.result);
        }
      });
    });
  });
});
