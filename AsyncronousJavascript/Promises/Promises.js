//creating promises
const promiseObject = new Promise((resolve, reject) => {
  //kick of some async work
  //...
  setTimeout(() => {
    //resolve(1); // State Diagram= pending=>resolve or fulfilled
    reject(new Error('Error Occured'))//  State Diagram= pending=>rejected

  }, 2000)
});

//consuming priomises
promiseObject
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message));



//callback Hell solution using promises chaining
console.log("Before");

getuser(1).
  then(res => {
    console.log(res);
    return getRepositories(res.name);
  })
  .then(response => console.log(response)).
  catch(err => console.log(err.message));

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