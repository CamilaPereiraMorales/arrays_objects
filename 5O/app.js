const customerData = {
    Joe: {
      visits: 1,
    },
    Carol: {
      visits: 2,
    },
    Howard: {
      visits: 3,
    },
    Carrie: {
      visits: 4,
    },
  };
  
greetCustomer((firstName)=> {
    let greeting = '';
  
    // your code here
    if (!customerData[firstName]){
          greeting = 'Welcome! Is this your first time?';
   }else if (customerData[firstName].visits === 1){
          greeting = "Welcome back, " + firstName + '! ' + "We're glad you liked us the first time!";
   }else{
          greeting = 'Welcome back, ' + firstName + '! ' +  'So glad to see you again!';
   }
  
     greeting;
  });
  
  