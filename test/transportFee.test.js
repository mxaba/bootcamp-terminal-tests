let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee Function", function(){
    it("It returns the right price based on the shift you are working", function(){
        assert.equal("R10", transportFee("afternoon"))
        assert.equal("R20", transportFee("morning"))
        assert.equal("free", transportFee("nightshift"))
    })
    it("It should return false if the argument passed is not a string", function(){
        assert.deepEqual(false, transportFee(45))
    })
})