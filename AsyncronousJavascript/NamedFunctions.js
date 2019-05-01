
//callback Hell solution using Named Functions 
//instead of anonymous functions
console.log("Before")
getuser1(1, getuser2)
console.log("after")

function getuser2(user){
  console.log(`User:${user.name}`);
  getRepositories1(user.name,getRepositories2)
}


function getRepositories2(reposList){
    console.log(`Repos are :${reposList}`);
}

function getuser1(id, callback_fn) {
  setTimeout(() => {
    console.log("reading a user from database");
    callback_fn({ id: id, name: "lakhan" })
  }, 2000)
}

function getRepositories1(Name, callback_fn) {
  setTimeout(() => {
    console.log("reading repos from database");
    callback_fn( ["repo1", "repo2", "repo3"])
  }, 2000)
}
