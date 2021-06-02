module.exports = function(listOfObjects){
    if (typeof(listOfObjects) != 'string'){
        console.log("We accept strings / list of objects")
    }
    //console.log(listOfObjects)
    var itemsOver20 = [];
    //console.log(listOfObjects)
    for(var attr in listOfObjects){
      if(listOfObjects[attr].qty > 20){
        itemsOver20.push(listOfObjects[attr]);
      }
    }
    //console.log(itemsOver20)
    return itemsOver20;
  }