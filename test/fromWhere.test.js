let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("fromWhere Function", function(){
    it("It takes a car registration number as a parameter and returns the town the car is from", function(){
        assert.equal('Bellville', fromWhere('CY'))
        assert.equal('Paarl', fromWhere('CJ'))
        assert.equal('Cape Town', fromWhere('CA'))
        assert.equal('Some other place!', fromWhere('GP'))
    })
    it("Should return false when the argument passed is not a string", function(){
        assert.equal(false, fromWhere(678))
        assert.equal(false, fromWhere([]))
    })
})