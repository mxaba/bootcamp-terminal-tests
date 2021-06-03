let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo Function", function(){
    it("Should return how many years ago that year is from the current year.", function(){
        assert.equal(24, yearsAgo(1997))
    })
    it("Should return false if the argument passed is not a number", function(){
        assert.equal(false, yearsAgo('okau'))
    })
    it("Should return 21 when 2000 passed", function(){
        assert.equal(yearsAgo(2000), 21)
    })
})