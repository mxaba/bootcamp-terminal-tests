let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
]

var department = 'outdoor'

describe("mostProfitableDepartment Function", function(){
    it("Should return the  name of the most profitable department given data set", function(){
        assert.equal(department, mostProfitableDepartment(salesData))
    })
    it("It should make sure that the output is a String", function(){
        assert.isString(mostProfitableDepartment(salesData), "The output of this function should be string")
    })
})