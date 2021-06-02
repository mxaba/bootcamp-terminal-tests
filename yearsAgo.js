module.exports = function(year){
    //var day = new Date(year).getFullYear()
    var day2 = new Date().getFullYear()
    console.log(day2)
    if (typeof year == 'number'){
        return day2 - year
    }
    else {
        console.log("Plase use a number as your year")
        return false
    }
  }
