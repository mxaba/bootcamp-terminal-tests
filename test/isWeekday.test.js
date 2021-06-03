let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("isWeekday Function", function(){
    it("Should return true if you pass any weekday as an argument", function(){
        assert.equal(true, isWeekday("Friday"))
        assert.equal(true, isWeekday("Wednesday"))
    })
    it("Should return false if passed anything is not a weekday", function(){
        assert.equal(false, isWeekday(56))
        assert.equal(false, isWeekday("Sunday"))
    })
})