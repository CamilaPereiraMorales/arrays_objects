
removeStringValuesLongerThan((num, obj)=> {
    // your code here
    let properties =Object.keys(obj);
   
   for ( let i = 0; i < properties.length;i++){
   if   (obj[properties[i]].length> num) {
     delete obj[properties[i]];
    
   } obj;
    
  
  }
  });
  
  