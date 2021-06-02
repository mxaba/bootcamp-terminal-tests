let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

var arrays = 'CL 124,CY 567,CL 345, CJ 456,CL 341'

describe("countAllFromTown Function", function(){
    it("It should return false if the full entered is not a string", function(){
        assert.equal(false, countAllFromTown(34, 'CF'))
        assert.equal(false, countAllFromTown([], 'CF'))
    })
    it("It should return all the registration numbers in the string that is for that town", function(){
        assert.deepEqual([], countAllFromTown(arrays,'CF'))
        assert.deepEqual(["CL 124","CL 345","CL 341"], countAllFromTown(arrays,'CL'))
    })
})