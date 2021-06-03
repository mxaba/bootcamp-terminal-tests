let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("countRegNumber Function", function(){
    it("It thould return the counted number of the plates", function(){
        assert.equal(2, countRegNumber('CA 42665, AA 12 RT GP'))
    })
    it("Should return false if the argument passed is not a number", function(){
        assert.equal(false, countRegNumber(456))
    })
})