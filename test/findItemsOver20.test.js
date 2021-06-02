let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

var itemsList = [
    {"name":"apples","qty":10},
    {"name":"pears","qty":37},
    {"name":"bananas","qty":27},
    {"name":"apples","qty":3}
]

var itemsList1 = [
    {"name":"apples","qty":10}, 
    {"name":"pears","qty":19},
    {"name":"bananas","qty":17},
    {"name":"apples","qty":3}
]

var itemsList2 = [
    {"name":"apples","qty":40},
    {"name":"pears","qty":20},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
]

var ans = [
    {"name":"pears","qty":37},
    {"name":"bananas","qty":27}
]

var ans1 = [
    {"name":"apples","qty":40},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
]

describe("findItemsOver20 Function", function(){
    it("The function should return all the products that have a quantity higher than 20.", function(){
        assert.deepEqual(ans, findItemsOver20(itemsList))
        assert.deepEqual([], findItemsOver20(itemsList1))
        assert.deepEqual(ans1, findItemsOver20(itemsList2))
    })
    it("It should return a false if the argument passed is not a string", function(){
        assert.equal(false, findItemsOver20(45654))
    })
    it("It should make sure that the quantity is not below 20", function(){
        assert.isBelow(!findItemsOver20(itemsList)[1].qty, 20, 'The quantity should not be below 20')
    })
})