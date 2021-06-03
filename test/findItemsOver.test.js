let assert = require("assert");
let findItemsOver = require("../findItemsOver");

var listOver1 = [
    {"name":"apples","qty":10},
    {"name":"pears","qty":19},
    {"name":"bananas","qty":17},
    {"name":"apples","qty":3}
]

var listOver2 = [
    {"name":"apples","qty":40},
    {"name":"pears","qty":20},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
]

var threshold = 25

describe("findItemsOver Function", function(){
    it("Should return products that have quantity higher than the 24", function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"apples","qty":37}], findItemsOver(listOver2, 24))
    })
    it("Should return products that have quantity higher than the 13", function(){
        assert.deepEqual([{"name":"pears","qty":19},{"name":"bananas","qty":17}], findItemsOver(listOver1, 13))
    })
    it("Should return empty array if there's no product above that threhold", function(){
        assert.deepEqual([], findItemsOver(listOver1, 100))
    })
})
