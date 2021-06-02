module.exports = function(str){
    console.log(str)
    var list = []
    if (typeof(str) == 'string'){
        var all = str.split(', ')
        for (var i=0;i<all.length;i++){
            var loop = all[i].trim()
            if (loop.includes("CJ")){
                list.push(loop)
            }
        }
        return list
    }
    else {
        console.log("Please pass a string")
        return false
    }
  }