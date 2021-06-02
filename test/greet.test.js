let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });

    it('should greet Mcebo correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Mcebo', greet('Mcebo'));
    });

    it("When a number is passed or the argument passed is not a string, it should return false", function(){
        assert.equal(false, greet(45))
    })

});
