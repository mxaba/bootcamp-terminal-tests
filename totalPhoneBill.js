module.exports = function(string){
    if (typeof(string) != 'string'){
        return false
    }
    var array = string.split(", ")
    var calls = 0
    var sms = 0
    for (var i=0; i<array.length;i++){
      var m = array[i].trim()
      if (m.startsWith("s")){
        sms++
      }else if (m.startsWith("c")){
        calls++
      }
    }
    var bill = 2.75 * calls + 0.65 * sms
    console.log(bill)
    return "R" + bill.toFixed(2)
}