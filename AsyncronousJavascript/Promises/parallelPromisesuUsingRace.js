//sometimes we need to do operation after a promise complete
//we don't want to wait all to complete we can continue after 
//that promise complete => we use Promise.race for it
const promise1=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 1');
    resolve(1)
  },6000)
})

const promise2=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 2');
    resolve(2)
  },4000)
})
// promise is resolved when any of the promise from array is resolved or reject
//and in this case the response is not an array it's Single Value
Promise.race([promise1,promise2]).then(
  res=>console.log(res)
).catch(err=>console.log(err.message))

//if first promise completed from array is rejected
const promise3=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 3');
    resolve(3)
  },12000)
})

const promise4=new Promise((resolve,rejected)=>{
  setTimeout(()=>{
    console.log('Asynchronous Operation 4 rejected');
    rejected(new Error("operation 4 rejected"))
  },8000)
})
//it prints error because first promise that completed is rejected
Promise.race([promise3,promise4]).then(
  res=>console.log(res)
).catch(err=>console.log(err.message))
