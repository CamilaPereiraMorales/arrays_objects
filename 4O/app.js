function fromListToObject(array) {
    // your code here
    obj = {};
    
    for(var i=0 ;i<array.length;i++){
      var newArray = array[i];
      obj[newArray[0]]=newArray[1];
    }
    return obj
  }
  
  module.exports = fromListToObject;
  