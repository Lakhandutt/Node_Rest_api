
//creating promises that already resolved
const resolvedPromise=Promise.resolve({id:1});
resolvedPromise.then(
  result=>console.log(result)
)

//creating promises that already rejected
//new Error includes callstack in catching the Error
//so must use new Error('msg...) for rejecting promises
const rejectedPromise=Promise.reject(new Error('reason for rejection'));
rejectedPromise.catch(
  err=>console.log(err.message)
)
