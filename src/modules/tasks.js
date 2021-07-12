import { myProjects, myTasks } from '../index';
import { projectsToDom } from './projects';
import { setDate } from './helpers';

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
let countProject = false;
let countForm = false;

const makeTaskSection = (value) => {
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
  </div>

  `

  first.appendChild(tasksTitleDiv);

  countProject = true;
  console.log(countProject)
  }
  else {
    first.innerHTML='';
    countProject = false;
    console.log(countProject)
  }

};

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

export { makeTaskForm, makeTaskSection, Task }