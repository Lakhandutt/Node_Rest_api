
//callback example
console.log("Before")
getuser(1, (user) => {
  console.log(`User:${user.name}`);
  getRepositories(user.name, (reposList) => {
    console.log(`Repos are :${reposList}`);
  })
})
console.log("after")
function getuser(id, callback_fn) {
  setTimeout(() => {
    console.log("reading a user from database");
    callback_fn({ id: id, name: "lakhan" })
  }, 2000)
}

function getRepositories(Name, callback_fn) {
  setTimeout(() => {
    console.log("reading repos from database");
    callback_fn( ["repo1", "repo2", "repo3"])
  }, 2000)
}

// IN callbacks CALLBACK HELL(Cristmas Tree problem)
//Due to nested callback function so it is not good for 
//large scale Applictions