import {  Project, projectToDom, projectsToDom, deleteProject } from './modules/projects';
// import { setProjects } from './modules/storage'
const addForm = document.getElementById('addForm');

export let myProjects = [];

if (localStorage.getItem('myProjects') !== null) {
  myProjects = JSON.parse(window.localStorage.getItem('myProjects'));
}
console.log(myProjects)

function setProjects() {
  console.log("in setProjectssss")
  window.localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

document.addEventListener('DOMContentLoaded', projectsToDom());

addForm.addEventListener('submit', (e) => {
  e.preventDefault();


  console.log(addForm[1].value)

  const newName = addForm[0].value;

const newDescription = addForm[1].value;

  let confirmation = true;

  if (!newName) {
    alert("Project's name can't be empty");
    confirmation = false;
  }

  if (!confirmation) {
    return false;
  }

  console.log("heree")

  const newProject = new Project(newName, newDescription);
  console.log(newProject)

  projectToDom(newProject);
  myProjects.push(newProject);
  console.log('here', myProjects);
  setProjects(myProjects)

});

const projectManipulation = document.getElementById('projectsContainer');
projectManipulation.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target
   console.log("in delete");

  let removeData = clicked.closest('article').firstElementChild.textContent;

  if (clicked.classList.contains('delProjectBtn')) {
    alert('No kidding?!');
    clicked.closest('article').remove();
    deleteProject(myProjects, removeData);
    console.log(myProjects);
    setProjects();
  }

  if (clicked.classList.contains('delProjectBtn')) {
  }
 })

