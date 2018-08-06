filterOddElements((arr)=> {
    let imparNum = [];
    for(let i=0; i<arr.length; i++){
    if (arr[i]%2 !==0){
     imparNum.push(arr[i]);
    
  }
  }
   imparNum
  });
  
  module.exports = filterOddElements;