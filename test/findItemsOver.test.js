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
    it("The function should return products that have quantity higher than the threshold.", function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"apples","qty":37}], findItemsOver(listOver2, 24))
        assert.deepEqual([{"name":"pears","qty":19},{"name":"bananas","qty":17}], findItemsOver(listOver1, 13))
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([
            {"name":"apples","qty":10},
            {"name":"pears","qty":37},
            {"name":"bananas","qty":27},
            {"name":"apples","qty":3}
        ], threshold))
    })
    it("Should ensure the threshold is a valid number", function(){
        assert.typeOf(threshold, 'number' ,"It should be a number")
    })
    it("Should ensure the listOver is a valid object", function(){
        assert.typeOf(listOver1, 'array', "It should be a a valid object")
        assert.typeOf(listOver2, 'array', "It should be a a valid object")
    })
})
