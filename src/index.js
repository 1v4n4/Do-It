import {  Project, projectToDom, projectsToDom,  deleteProject, checkProject } from './modules/projects';
// import { setProjects } from './modules/storage'
const addForm = document.getElementById('addForm');
const getName = document.getElementById('nameInput');
const getDescription = document.getElementById('descriptionInput');

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
  }
 })


  const addTaskForm = document.getElementById('taskForm');
  addTaskForm.innerHTML = `<input type="text" name="taskName" id="task-name">
  <div class="dropdownDiv d-flex justify-content-between">
        <div class="dropDownLeft">
          <button type="button" class="btn btn-light ps-3" id="addCommentBtn" data-bs-toggle="modal" data-bs-target="#commentModal">
            Add comment
          </button>
          <div class="modal fade" id="commentModal" tabindex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <textarea  id="comment" rows="3" maxlength="150" placeholder="Add comment here"></textarea>
              <br>
              <button type="button" class="btn btn-secondary">Save changes</button>
            </div>
          </div>
        </div>

        <div class="dropDownLeft d-flex">
          <select class="form-select me-4" id="selectPriority" aria-label="Default select example">
            <option selected>Select priority level</option>
            <option id="one" value="1">&#xf024; Priority 1</option>
            <option id="two" value="2">&#xf024; Priority 2</option>
            <option id="three" value="3">&#xf024; Priority 3</option>
            <option id="four" value="4">&#xf024; Priority 4</option>
          </select>
          <input type="date" id="datePicker">
        </div>
  </div>`
