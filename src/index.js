import { Project, projectToDom, projectsToDom,  deleteProject, checkProject } from './modules/projects';
import { makeTaskForm, makeTaskSection } from './modules/tasks';

// import { setProjects } from './modules/storage'
const addForm = document.getElementById('addForm');
const getName = document.getElementById('nameInput');
const getDescription = document.getElementById('descriptionInput');
const toDos = document.getElementById('toDos');

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

const newName = addForm[0].value;

const newDescription = addForm[1].value;

  let confirmation = true;

  if (!newName) {
    alert("Project's name can't be empty");
    confirmation = false;
  }

  if (checkProject(newName)) {
    alert("Project with same name already exists");
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

  let removeData = clicked.closest('article').firstElementChild.textContent;

  if (clicked.classList.contains('delProjectBtn')) {
    alert('No kidding?!');
    clicked.closest('article').remove();
    deleteProject(myProjects, removeData);
    setProjects();
  }

  if (clicked.classList.contains('editProjectBtn')) {

    console.log('in edit');
    let project = myProjects.find(x => x.name == removeData);
  console.log(project);

  getName.value = project.name;
  console.log(getName);
  getDescription.value = project.description;
  console.log(getDescription.value);

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const edited = new Project(editForm[0].value, editForm[1].value)
    console.log(edited);

    let confirmation = true;

    if (edited.name == project.name && edited.description == project.description) {
      alert("You haven't change anything");
      confirmation = false;
      return;
    }

    const checkData = edited.name

    if (checkProject(checkData) && edited.name != project.name) {
      alert("Project with same name already exists");
      console.log('herre');
      confirmation = false;
    }

    if (!confirmation) {
      return;
    }

    project.name = edited.name;
    project.description = edited.description;

    setProjects();
    projectsContainer.innerHTML = '',
    projectsToDom();

  })
}
if (clicked.classList.contains('seeBtn')) {

  console.log('in see');
   makeTaskSection();
 }

});


toDos.addEventListener('click', (e) => {
   e.preventDefault();

   const clicked = e.target;
   console.log('here');
   if (clicked.classList.contains('plus')) {
  console.log('here');
  makeTaskForm();
   }
});

