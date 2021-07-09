import  { myProjects } from '../index'

function getProjects() {
  let myProjects;
  if(localStorage.getItem('myProjects') === null) {
    myProjects = [];
  }
  else {
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
  }
  console.log('al',myProjects)
  return myProjects;
}

// function setProjects() {
//   console.log("in setProjects")
//   window.localStorage.setItem('myProjects', JSON.stringify(myProjects));
// }




export { setProjects }