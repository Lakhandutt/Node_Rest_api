//creating promises
const promiseObject=new Promise((resolve,reject)=>{
  //kick of some async work
  //...
  setTimeout(()=>{
    //resolve(1); // State Diagram= pending=>resolve or fulfilled
   reject(new Error('Error Occured'))//  State Diagram= pending=>rejected

  },2000)
});

//consuming priomises
promiseObject
.then(result=>console.log('Result',result))
.catch(err=>console.log('Error',err.message));