
function removeStringValuesLongerThan(num, obj) {
    // your code here
    var properties =Object.keys(obj);
   
   for ( var i = 0; i < properties.length;i++){
   if   (obj[properties[i]].length> num) {
     delete obj[properties[i]];
    
   }return obj;
    
  
  }
  }
  module.exports = removeStringValuesLongerThan;
  