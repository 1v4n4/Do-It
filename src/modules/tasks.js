// eslint-disable-next-line
import { myTasks } from '../index';
import {
  setDate, Flag, Status, modalStatus,
} from './helpers';

function Task(title, projectsN, comment, priority, deadline) {
  this.title = title;
  this.projectsN = projectsN;
  this.comment = comment;
  this.priority = priority;
  this.deadline = deadline;
  this.finished = false;
}

const first = document.getElementById('first');
const taskForm = document.getElementById('taskForm');
const editTaskForm = document.getElementById('editTaskForm');
const tableArticle = document.getElementById('tableArticle');
const todayContainer = document.getElementById('todayContainer');

let countProject = false;
// eslint-disable-next-line
let countForm = false;

const tasksToDom = (selected) => {
  const taskTable = document.createElement('table');
  taskTable.setAttribute('id', 'tasksTable');
  taskTable.classList = 'table';
  tableArticle.appendChild(taskTable);
  taskTable.innerHTML = `
  <thead class="table-dark">
          <tr>
            <th class='col-1 ps-3'></th>
            <th class='col-3 ps-3'>Title</th>
            <th class='col-2'>Priority</th>
            <th class='col-2'>Status</th>
            <th class='col-2'>Details</th>
            <th class='col-1'>Edit</th>
            <th class='col-1 ps-3'>Delete</th>
          </tr>
        </thead>`;

  const taskBody = document.createElement('tbody');
  taskBody.setAttribute('id', 'taskBody');
  taskBody.className = 'ps-5';
  tableArticle.appendChild(taskBody);
  selected.forEach((task) => {
    const index = myTasks.indexOf(task) + 1;
    taskBody.innerHTML += `
          <tr>
            <th scope="row" class='col-1 text-light'>${index}</th>
            <td class='col-3'>${task.title}</td>
            <td class='col-2 ps-4'>${Flag(task.priority)}</td>
            <td class='col-2 ps-3'><button type='button' class="statusBTN btn p-0 btn-light">${Status(task.finished)}</button></td>
            <td class='col-2 ps-3'><button type='button' class="btn p-0 btn-light" data-bs-toggle="modal" data-bs-target="#Modal${index}">
              Details</button><td>
              <td class='col-1 ps-3'><button type='button' class='editTaskBtn btn p-0 btn-light'><i class="fa fa-wrench text-dark editTaskBtn"></i></button></td>
            <td class='col-1 ps-3'><button type='button' class='deleteTaskBtn btn p-0 btn-light'><i class="fa fa-trash text-dark deleteTaskBtn"></i></button></td>

          </tr>

          <div class="modal fade" id="Modal${index}" tabindex="-1" aria-labelledby="${index}Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold " id="${index}Label">${task.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="modalComment">Comment: ${task.comment} </p>
        <p class="modalPrjct">Project: ${task.projectsN} </p>
        <p>Priority: ${Flag(task.priority)}</p>
        <p>Status: ${modalStatus(task.finished)} </p>
        <p>Deadline: ${task.deadline} </p>
      </div>
    </div>
  </div>
</div>`;
  });
};

const makeTaskSecOnClck = (value, selected) => {
  if (!countProject) {
    const tasksTitleDiv = document.createElement('div');
    tasksTitleDiv.className = 'p-3';
    tasksTitleDiv.innerHTML = `
  <h2 class='prjct text-center mt-5'>Project: ${value}</h2>
  <div class=" d-flex justify-content-center plus">
    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>
    <button type="button" class="pb-2 text-dark btn btn-light plus">
      <i class="fa fa-plus plus"></i>
    </button>
  </div>`;

    first.appendChild(tasksTitleDiv);
    tasksToDom(selected);
    countProject = true;
  } else {
    first.innerHTML = '';
    tableArticle.innerHTML = '';
    countProject = false;
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
    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>
    <button type="button" class="pb-2 text-dark btn btn-light plus">
      <i class="fa fa-plus plus"></i>
    </button>
  </div>`;

  first.appendChild(tasksTitleDiv);
  tasksToDom(selected);
  countProject = true;
};

const makeTaskForm = () => {
  if (!countForm) {
    taskForm.innerHTML = `
    <input type='text' class=' my-2' name='taskName' id='task-name' placeholder='Add title here'>
    <textarea  id='comment' class='my-2' rows='3' maxlength='150' placeholder='Add comment here'></textarea>
    <select class='form-select me-4' id='selectPriority' aria-label='Default select example'>
            <option selected value='1'>Select priority level</option>
            <option class='one' value='1'>&#xf024; Priority 1</option>
            <option class='two' value='2'>&#xf024; Priority 2</option>
            <option class='three' value='3'>&#xf024; Priority 3</option>
            <option class='four' value='4'>&#xf024; Priority 4</option>
    </select>
    <input type="date" max='2110-13-13' id='datePicker'>
    <button type='button' class='confirmTask btn btn-secondary' id='confirmTask'>Create task</button>
    <button type='button' class='dismissTask btn btn-light m-3' id='dismissTask'>Dismiss</button>
  `;

    document.getElementById('datePicker').setAttribute('min', setDate());
    countForm = true;
  } else {
    taskForm.innerHTML = '';
    countForm = false;
  }
};

const changeStatus = (index) => {
  // eslint-disable-next-line
  myTasks[index].finished ? myTasks[index].finished = false : myTasks[index].finished = true;
};

const deleteAllTasks = (currentProject) => {
  const arr = myTasks.filter((task) => task.projectsN !== currentProject);
  myTasks = arr;
  first.innerHTML = '';
  tableArticle.innerHTML = '';
  todayContainer.innerHTML = '';
};

const makeEditForm = (task) => {
  editTaskForm.innerHTML = `
      <input type='text' class=' my-2' name='EdiTaskName' id='edit-task-name' value='${task.title}'>
      <textarea  id='editComment' class='my-2' rows='3' maxlength='150'> ${task.comment}</textarea>
      <select class='form-select me-4' id='selectPriority1' aria-label='Default select example'>
              <option selected value='1'>Priority ${Flag(task.priority)}</option>
              <option class='one' value='1'>&#xf024; Priority 1</option>
              <option class='two' value='2'>&#xf024; Priority 2</option>
              <option class='three' value='3'>&#xf024; Priority 3</option>
              <option class='four' value='4'>&#xf024; Priority 4</option>
      </select>
      <input type="date" max='2110-13-13' id='datePicker1' value='${task.date}'>
      <button type='submit' class='confirmEditTask btn btn-secondary' id='confirmEditTask'>Edit task</button>
      <button type='button' class='dismissEditTask btn btn-light m-3' id='dismissEditTask'>Dismiss</button>
    `;

  document.getElementById('datePicker1').setAttribute('min', setDate());
};

const makeToday = () => {
  todayContainer.innerHTML = '';
  // eslint-disable-next-line
  const todayTasks = myTasks.filter((task) => task.deadline === setDate() && task.finished === false);
  todayTasks.forEach((task) => {
    todayContainer.innerHTML += `
  <div class="card mx-auto mt-3 bg-light">
            <div class="card-body bg-light">
              <h5 class="card-title">${task.title}</h5>
              <p class="card-text">${task.comment}</p>
            </div>
            <ul class="list-group  bg-light list-group-flush">
              <li class="list-group-item bg-light">Project: ${task.projectsN}</li>
              <li class="list-group-item bg-light">Priority: ${Flag(task.priority)}</li>
              <li class="list-group-item bg-light">Status: ${modalStatus(task.finished)}</li>
              <li class="list-group-item bg-light">Deadline: ${task.deadline}</li>
            </ul>

          </div>`;
  });
};

export {
  // eslint-disable-next-line
  makeTaskForm, makeTaskSecOnClck, changeStatus, Task, makeTaskSection, makeEditForm, deleteAllTasks, countForm, makeToday,
};