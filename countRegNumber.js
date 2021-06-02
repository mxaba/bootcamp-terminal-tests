module.exports = function(name){
    if (typeof(name) == 'string'){
        var count = name.split(",").length
        return count
    }
    else {
        console.log("Please use a String")
        return false
    }
}
    