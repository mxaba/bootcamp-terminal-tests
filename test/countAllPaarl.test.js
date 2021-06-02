let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

var array = "CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 8765"
var output = ['CJ 678 543', 'CJ 67890', 'CJ 8765']

describe("countAllPaarl Function", function(){
    it("It should returns all the registration numbers in the string for Paarl", function(){
        assert.deepEqual(output, countAllPaarl(array))
    })
    it("The array must not be NULL(The argument passed)", function(){
        assert.isNotNull(false, countAllPaarl(234567))
    })
    it("When the argument that is passed is not a string it should return false", function(){
        assert.equal(false, countAllPaarl(98))
    })

})