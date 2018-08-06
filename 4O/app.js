fromListToObject((array)=> {
    // your code here
    obj = {};
    
    for(let i=0 ;i<array.length;i++){
      let newArray = array[i];
      obj[newArray[0]]=newArray[1];
    }
     obj
  });
  
  module.exports = fromListToObject;
  