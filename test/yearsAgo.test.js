let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo Function", function(){
    it("It should return how many years ago that year is from the current year.", function(){
        assert.equal(24, yearsAgo(1997))
    })
    it("It should return false if the argument passed is not a number", function(){
        assert.equal(false, yearsAgo('okau'))
    })
    it("Should make sure that it returns a number not a string", function(){
        assert.typeOf(yearsAgo(2010), 'number')
    })
})