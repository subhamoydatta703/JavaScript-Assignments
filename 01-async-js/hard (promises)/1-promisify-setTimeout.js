/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n * 1000);
    });
    return p;
  }
  
  module.exports = wait;

  function waiting(n) {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n*1000);
    });
    return promise1;
    
  }

  waiting(2).then(()=>{
    
    console.log("Done");
    
  })
  module.exports = waiting;