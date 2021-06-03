let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("isFromBellville Function", function(){
    it("The fucntion should return true if the car is from is from Bellville", function(){
        assert.equal(true, isFromBellville("CY90345"))
    })
    it("Should return false when a number number plate is not from Bellville or it doesn't start with 'CY'", function(){
        assert.equal(false, isFromBellville("CA0099"))
    })
})
