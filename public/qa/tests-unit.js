var fortune = require('.../lib/fortune.js');
var expect = require('chai').expect;

suite('Random test', function(){
    test('getFortune() должна возвращать строку', function(){
        expect(typeof fortune.getFortune() ==='string');
    });
});