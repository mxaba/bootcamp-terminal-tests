let assert = require("assert");
let regCheck = require("../regCheck");

describe("regCheck Function", function(){
    it("Should return true only when the given registration number matches the provide/location ", function(){
        assert.equal(true, regCheck('MC 784 GP', 'GP'))
    })
    it("Should return false only when the given registration number desn't matches the provide/location passsed", function(){
        assert.equal(false, regCheck('CA 98 CA', 'GP'))
    })
})