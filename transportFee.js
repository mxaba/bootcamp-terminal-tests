module.exports = function(shift){
    if (typeof(shift) != 'string'){
        console.log("Please pass a string as your argument")
        return false
    }
    switch(shift) {
      case "morning":
        return "R20"
      case "afternoon":
        return "R10";
      case "nightshift":
        return "free";
    }
}