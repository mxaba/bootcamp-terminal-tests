module.exports = function(profitableDept){

    if (typeof profitableDept != 'object'){
      return false
    }
    var deptartmentObj = {hardware:0, outdoor:0, carpentry:0, electronics:0};
    for(var appear in profitableDept){
      if(profitableDept[appear].department === 'outdoor'){
        deptartmentObj.outdoor += profitableDept[appear].sales;
      }
      else if(profitableDept[appear].department === 'hardware'){
        deptartmentObj.hardware += profitableDept[appear].sales;
      }
      else if(profitableDept[appear].department === 'electronics'){
        deptartmentObj.electronics += profitableDept[appear].sales;
      }
      else if(profitableDept[appear].department === 'carpentry'){
        deptartmentObj.carpentry += profitableDept[appear].sales;
      }
    }
    var sortArray = [];
    for(var saleDeptartment in deptartmentObj){
      sortArray.push([saleDeptartment, deptartmentObj[saleDeptartment]]);
    }
    sortArray.sort(function(first, second){
      return second[1] - first[1];
    })
    return sortArray[0][0];
  }