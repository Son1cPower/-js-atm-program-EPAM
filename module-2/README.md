# Module 2: Unit Testing in JavaScript

## Run tests without test coverage report

`npm test`

## Get unit tests with coverage report

`npm run coverage`

## Task

1. Cover provided code (create a file with the provided content) with unit tests using Mocha.
1. Add mochawesome as a reporter.
1. Add code coverage analyzer c8.
1. Setup eslint with a popular style guide.
1. Setup pre-commit hook using husky, which runs code coverage analysis and eslint before any commit.

#### Acceptance criteria:

1. Code coverage is 100% for everything.
1. Code follows a popular style guide.
1. The package.json file should contain the following scripts:  
   `test – should run your tests.`  
   `coverage – should run code coverage analysis.`
1. lint – should run eslint. (Can be run with the --fix flag)
