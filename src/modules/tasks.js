import { myProjects, myTasks } from '../index';
import { projectsToDom } from './projects';
import { setDate, Flag, Status } from './helpers';

function Task(title, projectsN, comment, priority, deadline) {
  this.title = title;
  this.projectsN = projectsN;
  this.comment = comment;
  this.priority = priority;
  this. deadline = deadline;
  this.finished = false;
}

const toDos = document.getElementById('toDos');
const first = document.getElementById('first');
const taskForm = document.getElementById('taskForm');
const tableArticle = document.getElementById('tableArticle');

let countProject = false;
let countForm = false;

const makeTaskSectionOnClick = (value, selected) => {
  if (!countProject) {
  const tasksTitleDiv = document.createElement('div');
  tasksTitleDiv.className = 'p-3';
  tasksTitleDiv.innerHTML = `
  <h2 class='prjct text-center'>Project: ${value}</h2>
  <div class=" d-flex justify-content-center plus">
    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Your tasks</h4>
    <button type="button" class="pb-2 text-dark btn btn-light plus">
      <i class="fas fa-plus plus"></i>
    </button>
  </div>`

  first.appendChild(tasksTitleDiv);
  tasksToDom(selected)
   countProject = true;
  console.log(countProject)
  }
  else {
    first.innerHTML = '';
    tableArticle.innerHTML = '';
    countProject = false;
    console.log(countProject)
  }

};

const makeTaskSection = (value, selected) => {
  first.innerHTML = '';
  taskForm.innerHTML = '';
  tableArticle.innerHTML = '';
  const tasksTitleDiv = document.createElement('div');
  tasksTitleDiv.className = 'p-3';
  tasksTitleDiv.innerHTML = `
  <h2 class='prjct text-center'>Project: ${value}</h2>
  <div class=" d-flex justify-content-center plus">
    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Your tasks</h4>
    <button type="button" class="pb-2 text-dark btn btn-light plus">
      <i class="fas fa-plus plus"></i>
    </button>
  </div>`

  first.appendChild(tasksTitleDiv);
  tasksToDom(selected)
   countProject = true;
  console.log(countProject)
}

const  makeTaskForm = () => {
  // const taskForm = document.createElement('form');
  // taskForm.className = "taskForm border border-dark px-2 mx-5 ";
  // taskForm.setAttribute('id', 'taskForm');
  if (!countForm) {
 taskForm.innerHTML = `
    <input type='text' class=' my-2' name='taskName' id='task-name' placeholder='Add title here'>
    <textarea  id='comment' class='my-2' rows='3' maxlength='150' placeholder='Add comment here'></textarea>
    <select class='form-select me-4' id='selectPriority' aria-label='Default select example'>
            <option selected value='1'>Select priority level</option>
            <option id='one' value='1'>&#xf024; Priority 1</option>
            <option id='two' value='2'>&#xf024; Priority 2</option>
            <option id='three' value='3'>&#xf024; Priority 3</option>
            <option id='four' value='4'>&#xf024; Priority 4</option>
    </select>
    <input type="date" max='2110-13-13' id='datePicker'>
    <button type='submit' class='btn btn-secondary' id='confirmTask'>Create task</button>
    <button type='button' class='btn btn-light m-3' id='dismissTask'>Dismiss</button>
  `;

  document.getElementById("datePicker").setAttribute("min", setDate());
  countForm = true;
  console.log(countForm);
  }

  else {
    taskForm.innerHTML = '';
    countForm = false;
    console.log(countForm);
  }

}

const tasksToDom = (selected) => {
  const taskTable = document.createElement('table');
  taskTable.setAttribute('id', 'tasksTable');
  taskTable.classList = 'table';
  tableArticle.appendChild(taskTable);
  tasksTable.innerHTML = `
  <thead class="table-dark">
          <tr>
            <th class='col-1 ps-3'>#</th>
            <th class='col-3 ps-3'>Title</th>
            <th class='col-2'>Finished</th>
            <th class='col-2'>Status</th>
            <th class='col-2'>Details</th>
            <th class='col-1'>Edit</th>
            <th class='col-1 ps-3'>Delete</th>
          </tr>
        </thead>`

        const taskBody = document.createElement('tbody');
        taskBody.setAttribute('id', 'taskBody');
        taskBody.className = 'ps-5';
        tableArticle.appendChild(taskBody);
  console.log(selected)
  selected.forEach(function(task) {
    let index = myTasks.indexOf(task) + 1;
          taskBody.innerHTML += `
          <tr>
            <th scope="row" class='col-1 ps-3'>${index}</th>
            <td class='col-3'>${task.title}</td>
            <td class='col-2'>${Flag(task.priority)}</td>
            <td class='col-2'><button type='button' class="statusBTN btn p-0 btn-light">${Status(task.finished)}</button></td>
            <td class='col-2'><button type='button' class="btn p-0 btn-light" data-bs-toggle="modal" data-bs-target="#detailsModal">
              Details</button><td>
              <td class='col-1'><button type='button' class='editTaskBtn btn p-0 btn-light'><i class="fas fa-pen text-dark editTaskBtn"></i></button></td>
            <td class='col-1'><button type='button' class='deleteTaskBtn btn p-0 btn-light'><i class="fas fa-trash text-dark deleteTaskBtn"></i></button></td>

          </tr>

          <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="detailsModalLabel">${task.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div> ${task.comment} </div>
        <div> ${task.projectsN} </div>
        <div> ${Flag(task.priority)}</div>
        <div> ${Status(task.finished)} </div>
        <div> ${task.deadline} </div>
      </div>
    </div>
  </div>
</div>`


 });
}

const changeStatus = (index) => {
  myTasks[index].finished ? myTasks[index].finished = false : myTasks[index].finished = true;
};

const deleteAllTasks = (currentProject) => {
  console.log('in')
  myTasks.forEach((task) => {
    if (task.projectsN == currentProject) {
      console.log('innn')
      let index = myTasks.indexOf(task);
      console.log(index)
      myTasks.splice(index, 1);
      first.innerHTML = '';
      tableArticle.innerHTML = '';
    }
  });
};

export { makeTaskForm, makeTaskSectionOnClick, makeTaskSection, Task, tasksToDom, changeStatus, deleteAllTasks }