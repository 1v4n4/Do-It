import { Project, projectToDom, projectsToDom,  deleteProject, checkProject } from './modules/projects';
import { makeTaskForm, makeTaskSectionOnClick, Task, makeTaskSection, tasksToDom } from './modules/tasks';

// import { setProjects } from './modules/storage'
const addForm = document.getElementById('addForm');
const getName = document.getElementById('nameInput');
const getDescription = document.getElementById('descriptionInput');
const first = document.getElementById('first');
const projectsContainer = document.getElementById('projectsContainer');
const tableArticle = document.getElementById('tableArticle');

export let myProjects = [];

//initialize and strore projects
if (localStorage.getItem('myProjects') !== null) {
  myProjects = JSON.parse(window.localStorage.getItem('myProjects'));
}

function setProjects() {
  console.log("in setProjectssss")
  window.localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

let currentProject = '';

//initialize and store tasks
export let myTasks = [];

if (localStorage.getItem('myTasks') !== null) {
  myTasks = JSON.parse(window.localStorage.getItem('myTasks'));
}

function setTasks() {
  console.log("in setTasks")
  window.localStorage.setItem('myTasks', JSON.stringify(myTasks));
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
  console.log(newProject);
  myProjects.push(newProject);
  setProjects(myProjects);
  projectsContainer.innerHTML = ''
  projectsToDom();


});

const projectManipulation = document.getElementById('projectsContainer');
projectManipulation.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target

  currentProject = clicked.closest('article').firstElementChild.textContent;
  let selectedTasks = myTasks.filter(task => task.projectsN === currentProject);

  if (clicked.classList.contains('delProjectBtn')) {
    alert('No kidding?!');
    clicked.closest('article').remove();
    deleteProject(myProjects, currentProject);
    setProjects();
  }

  if (clicked.classList.contains('editProjectBtn')) {

      let project = myProjects.find(x => x.name == currentProject);
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
    projectsContainer.innerHTML = '';
    projectsToDom();

    })
}
if (clicked.classList.contains('seeBtn')) {


   makeTaskSectionOnClick(currentProject, selectedTasks);


 }
 currentProject = currentProject;
});


first.addEventListener('click', (e) => {
   e.preventDefault();

   const clicked = e.target;
   console.log('here');
   if (clicked.classList.contains('plus')) {
  console.log('here');
  makeTaskForm();
   }
  });

 const taskForm = document.getElementById('taskForm');
 taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const clicked = e.target
  const newTitle  = clicked[0].value;
  const newComment = clicked[1].value;
  const newPriority = clicked[2].value;
  const newDate = clicked[3].value;

  confirm = true;

  if (!newTitle) {
    alert("Title must not be empty");
    confirm = false
    return;
  }

  if (confirm = false) {
    return;
  }
  taskID+=1;

  const newTask = new Task(taskID, newTitle, currentProject, newComment, newPriority, newDate);
  console.log(newTask);
  myTasks.push(newTask);
  setTasks();
  let selectedTasks = myTasks.filter(task => task.projectsN === currentProject);

  makeTaskSection(currentProject, selectedTasks);
 });


 tableArticle.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target;

  let index = parseInt(clicked.closest('tr').firstElementChild.textContent) - 1;

  if(clicked.classList.contains('deleteTaskBtn')) {
    clicked.closest('tr').remove();
    myTasks.splice(index, 1);
    setTasks();
  }
  if(clicked.classList.contains('deleteTaskBtn')) {

  }
 });
