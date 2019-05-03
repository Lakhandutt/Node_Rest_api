
//using async await that uses promises internally
//it used to making your asynchronous code to synchronous like 

console.log("Before");

// getuser(1).
//   then(res => {
//     console.log(res);
//     return getRepositories(res.name);
//   })
//   .then(response => console.log(response)).
//   catch(err => console.log(err.message));

//in place of above we use async function
async function getRepo(){
  const user=await getuser(1);
  console.log(user);
  const repos=await getRepositories(user.name);
  console.log(repos);
}

getRepo();


console.log("after");

function getuser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading a user from database");
      resolve({ id: id, name: "lakhan" })
    }, 2000)
  });

}

function getRepositories(Name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading repos from database");
      resolve(["repo1", "repo2", "repo3"])
    }, 2000)

  });

}