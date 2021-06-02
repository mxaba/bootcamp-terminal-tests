module.exports = function(num){
    if (typeof(num) != 'string'){
        console.log("Please use string not a number")
        return false
    }
    switch(num) {
      case "CY":
        return "Bellville"
      case "CJ":
        return "Paarl"
      case "CA":
        return "Cape Town"
      default:
        return "Some other place!"
    }
}
