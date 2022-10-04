const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

// test data
var todos = ['feed cat', 'do laundry', 'do dishes'];

describe("#test", function(){
  it('should print statement to the console', function(){
    assert.equal(typeof app.test, 'function')
  })
});

describe('#createNumberedList', function(){
  it('should return a string', function(){
    assert.equal(typeof app.createNumberedList(todos), 'string');
  });
  it ('should return correct string of todos', function(){
    let result = `1. feed cat\n2. do laundry\n3. do dishes`;
    assert.equal(app.createNumberedList(todos), result);
  });
});
