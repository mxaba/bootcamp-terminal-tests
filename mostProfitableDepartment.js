module.exports = function(profitableDept){
    //console.log(profitableDept);
    var deptartmentObj = {hardware:0, outdoor:0, carpentry:0, electronics:0};
    var department = {};
    
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
      //console.log(second[1] - first[1])
      //console.log(first[1] - second[1]) //Wrong
      return second[1] - first[1];
    })
    //console.log(sortArray[0][0])
    return sortArray[0][0];
  }