module.exports = function(allTown, town){
    if (typeof(allTown) != 'string') {
        console.log("Plase use a string as allTown")
        return false
    }
    var all = allTown.split(',')
    //console.log(all)
    var list = []
    for (var i=0;i<all.length;i++){
      var loop = all[i].trim()
      if (loop.includes(town)){
        list.push(loop)
      }
    }
    return list
  }