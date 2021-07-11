import { myProjects } from '../index';
const addTaskForm = document.getElementById('taskForm');
const makeAddTaskForm = () => {


  addTaskForm.innerHTML = `<input type="text" name="taskName" id="task-name">
  <div class="dropdownDiv d-flex justify-content-between">
          <input type="date" id="datePicker" placeholder="-">
        <div class="selectdata">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select priority level</option>
            <option id="one" value="1">&#xf024; Priority 1</option>
            <option id="two" value="2">&#xf024; Priority 2</option>
            <option id="three" value="3">&#xf024; Priority 3</option>
            <option id="four" value="4">&#xf024; Priority 4</option>
          </select>
        </div>


        </div>`
        }