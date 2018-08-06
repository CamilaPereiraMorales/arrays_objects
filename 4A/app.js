function areValidCredentials(name, password) {
    if (name.length > 4 && password.lenght > 8){
     return true;
   } else {
     return false; 
   }
   }
   
   module.exports = areValidCredentials;