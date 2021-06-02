module.exports = function(list, threshold){
    //console.log(list);
    var itemsOver=[];
    for(var index = 0; index < list.length; index++){
      if(list[index].qty > threshold){
        itemsOver.push(list[index]);
      }
    }
    //console.log(itemsOver);
    return itemsOver;
  }