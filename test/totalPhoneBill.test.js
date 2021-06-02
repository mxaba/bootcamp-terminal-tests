let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("totalPhoneBill Function", function(){
    it("It should only accept strings as arguments", function(){
        assert.equal(false, totalPhoneBill(34))
    })
    it("It should Calculate the total bill for the data provided", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
        assert.equal('R3.40', totalPhoneBill('call, sms'))
    })
})