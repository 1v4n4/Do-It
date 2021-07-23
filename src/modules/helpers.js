const setDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

const Flag = (task) => {
  if (task === '1') return '<i class="fa fa-flag text-danger"></i>';
  if (task === '2') return '<i class="fa fa-flag text-warning"></i>';
  if (task === '3') return '<i class="fa fa-flag text-info"></i>';

  return '<i class="fa fa-flag text-success"></i>';
};

const Status = (value) => (value ? '<i class="fa fa-check  text-dark statusBTN"></i>' : '<i class="fa fa-spinner text-dark statusBTN"></i>');

const modalStatus = (value) => (value ? 'Finished' : 'Pending');

const makesToday = (todayTasks) => {
  const todayContainer = document.createElement('div');
  todayContainer.innerHTML = '';
  // eslint-disable-next-line
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
  return todayContainer;
};

const makesEditForm = (task) => {
  const editTaskForm = document.createElement('div');
  editTaskForm.innerHTML = `
      <input type='text' class=' my-2 x' name='EdiTaskName' id='edit-task-name' value='${task.title}'>
      <textarea  id='editComment' class='my-2 x' rows='3' maxlength='150'> ${task.comment}</textarea>
      <select class='form-select me-4 x' id='selectPriority1' aria-label='Default select example'>
              <option class='x' selected value='1'>Priority ${Flag(task.priority)}</option>
              <option class='x one' value='1'>&#xf024; Priority 1</option>
              <option class='x two' value='2'>&#xf024; Priority 2</option>
              <option class='x three' value='3'>&#xf024; Priority 3</option>
              <option class='x four' value='4'>&#xf024; Priority 4</option>
      </select>
      <input type="date" class='x' max='2110-13-13' id='datePicker1' value='${task.date}'>
      <button type='submit' class='x confirmEditTask btn btn-secondary' id='confirmEditTask'>Edit task</button>
      <button type='button' class='x dismissEditTask btn btn-light m-3' id='dismissEditTask'>Dismiss</button>
    `;
  return editTaskForm;
};

const reasignsTasks = (oldName, newName, myTasks) => {
  myTasks.forEach((task) => {
    if (task.projectsN === oldName) {
      task.projectsN = newName;
    }
  });
  return myTasks;
};

const changesStatus = (index, myTasks) => {
  // eslint-disable-next-line
  myTasks[index].finished ? myTasks[index].finished = false : myTasks[index].finished = true;
};

const deletesAllTasks = (currentProject, myTasks) => {
  const arr = myTasks.filter((task) => task.projectsN !== currentProject);
  myTasks = arr;
  return myTasks;
};

export {
  setDate, Flag, Status, modalStatus, makesToday,
  makesEditForm, reasignsTasks, deletesAllTasks, changesStatus,
};