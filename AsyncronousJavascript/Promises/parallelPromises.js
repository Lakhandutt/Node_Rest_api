
//resolving promises parallelly
//working on all request parallelly by a single thread 
const promise1=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 1');
    resolve(1)
  },2000)
})

const promise2=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 2');
    resolve(2)
  },4000)
})

Promise.all([promise1,promise2]).then(
  res=>console.log(res)
)

//if one promise is rejected in the array then final Promise.all
//also rejected

const promise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('rejected operation 3');
    reject(new Error("Promise 3 Rejected"))
  },6000)
})

const promise4=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 4');
    resolve(4)
  },8000)
})

//as soon as a promise rejected it runs the catch 
// don't wait for all promises and after that 
//all promises in array executes 
Promise.all([promise3,promise4]).then(
  res=>console.log(res)
).catch(err=>console.log(err.message))