import { myProjects } from '../index';
import { projectsToDom } from './projects';

const toDos = document.getElementById('toDos');
const first = document.getElementById('first');
const second = document.getElementById('second');
let countProject = false;
let countForm = false;

const makeTaskSection = () => {
  if (!countProject) {
  const tasksTitleDiv = document.createElement('div');
  tasksTitleDiv.className = 'p-5';
  tasksTitleDiv.innerHTML = `
  <div class=" d-flex justify-content-center plus">
    <h4 class="taskHeadline mt-1 me-5 text-center">Your tasks</h4>
    <button type="button" class="pb-2 text-dark btn btn-light plus">
      <i class="fas fa-plus plus"></i>
    </button>
  </div>

  `

  first.appendChild(tasksTitleDiv);

  countProject = true;
  }
  else {
    toDos.innerHTML='';
    countProject = false;
  }

};

const  makeTaskForm = () => {
  const addTaskForm = document.createElement('form');
  addTaskForm.className = "taskForm mx-5 my-5";
  addTaskForm.setAttribute('id', 'taskForm');
  if (!countForm) {
 addTaskForm.innerHTML = `
  <div class='inputs border border-dark'>
    <input type='text' name='taskName' id='task-name'>
      <div class='dropdownDiv d-flex justify-content-between'>
        <div class='dropDownLeft'>
          <button type='button' class='btn btn-light ps-3' id='addCommentBtn' data-bs-toggle='modal' data-bs-target='#commentModal'>
            Add comment
          </button>
          <div class='modal fade' id='commentModal' tabindex='-1' aria-labelledby='commentModalLabel' aria-hidden='true'>
            <div class='modal-dialog'>
              <textarea  id='comment' rows='3' maxlength='150' placeholder='Add comment here'></textarea>
              <br>
              <button type='button' class='btn btn-secondary'>Save changes</button>
            </div>
          </div>
        </div>

        <div class='dropDownLeft d-flex'>
          <select class='form-select me-4' id='selectPriority' aria-label='Default select example'>
            <option selected>Select priority level</option>
            <option id='one' value='1'>&#xf024; Priority 1</option>
            <option id='two' value='2'>&#xf024; Priority 2</option>
            <option id='three' value='3'>&#xf024; Priority 3</option>
            <option id='four' value='4'>&#xf024; Priority 4</option>
          </select>
          <input type='date' id='datePicker'>
        </div>
      </div>
  </div>
  <button type='submit' class='btn btn-secondary my-3 ' id='confirmTask'>Create task</button>
  <button type='button' class='btn btn-light  m-3' id='dismissTask'>Dismiss</button>
  `;

  second.appendChild(addTaskForm);
  countForm = true;
  console.log(countForm);
  }

  else {
    second.innerHTML = '';
    countForm = false;
    console.log(countForm);
  }

}

export { makeTaskForm, makeTaskSection }