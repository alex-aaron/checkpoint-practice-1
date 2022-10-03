var assert = require('assert');
var expect = require('chai').expect;
var describe = require('mocha').describe;
var app = require('../index.js');

describe("#test", function(){
  it('should print statement to the console', function(){
    console.log(app);
    assert.equal(typeof app.test, 'function')
  })
});
