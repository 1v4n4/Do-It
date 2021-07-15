import { setDate } from './modules/helpers';
// eslint-disable-next-line
import {
  Project, projectsToDom, deleteProject, checkProject,
} from './modules/projects';
// eslint-disable-next-line
import { makeTaskForm, makeTaskSecOnClck, loadAfterEdit, reasignTasks, changeStatus, Task, makeTaskSection, makeEditForm, deleteAllTasks, makeToday, closeEditTaskForm, closeTaskForm
} from './modules/tasks';

const addForm = document.getElementById('addForm');
const getName = document.getElementById('nameInput');
const getDescription = document.getElementById('descriptionInput');
const first = document.getElementById('first');
const projectsContainer = document.getElementById('projectsContainer');
const tableArticle = document.getElementById('tableArticle');
const editForm = document.getElementById('editForm');
const editTaskForm = document.getElementById('editTaskForm');

const defaultTasks = [
  {
    title: "My important project's very important task",
    projectsN: 'My important project',
    comment: 'No comment',
    priority: '1',
    deadline: '2021-07-15',
    finished: false,
  },
  {
    title: "My important project's important task",
    projectsN: 'My important project',
    comment: '',
    priority: '2',
    deadline: '2021-07-14',
    finished: false,
  },
  {
    title: "My important project's less important task",
    projectsN: 'My important project',
    comment: '',
    priority: '3',
    deadline: '2021-07-24',
    finished: false,
  },
  {
    title: "My important project's least important task",
    projectsN: 'My important project',
    comment: '',
    priority: '4',
    deadline: '2021-07-31',
    finished: false,
  },
];

// eslint-disable-next-line
export let myProjects = [];

if (localStorage.getItem('myProjects') !== null) {
  myProjects = JSON.parse(window.localStorage.getItem('myProjects'));
}

function setProjects() {
  window.localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

let currentProject = '';

// eslint-disable-next-line
export let myTasks = [];

if (localStorage.getItem('myTasks') !== null) {
  myTasks = JSON.parse(window.localStorage.getItem('myTasks'));
}

function setTasks() {
  window.localStorage.setItem('myTasks', JSON.stringify(myTasks));
}

document.addEventListener('DOMContentLoaded', projectsToDom(), makeToday());
// eslint-disable-next-line
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
    alert('Project with same name already exists');
    confirmation = false;
  }

  if (!confirmation) {
    return false;
  }

  const newProject = new Project(newName, newDescription);
  myProjects.push(newProject);
  setProjects();
  projectsContainer.innerHTML = '';
  projectsToDom();
  addForm.reset();
});

const projectManipulation = document.getElementById('projectsContainer');
projectManipulation.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target;

  currentProject = clicked.closest('article').firstElementChild.textContent;
  const selectedTasks = myTasks.filter((task) => task.projectsN === currentProject);

  if (clicked.classList.contains('delProjectBtn')) {
    alert('No kidding?!');
    clicked.closest('article').remove();
    alert('Project deleted');
    deleteProject(myProjects, currentProject);
    deleteAllTasks(currentProject);
    setProjects();
    setTasks();
    makeToday();
  }

  if (clicked.classList.contains('editProjectBtn')) {
    const project = myProjects.find((x) => x.name === currentProject);

    getName.value = project.name;
    getDescription.value = project.description;

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const edited = new Project(editForm[0].value, editForm[1].value);

      let confirmation = true;

      if (!edited.name) {
        alert("Project's name can't be empty");
        confirmation = false;
      }

      if (edited.name === project.name && edited.description === project.description) {
        alert("You haven't change anything");
        confirmation = false;
        return;
      }

      const checkData = edited.name;

      if (checkProject(checkData) && edited.name !== project.name) {
        alert('Project with same name already exists');

        confirmation = false;
      }

      if (!confirmation) {
        return;
      }

      reasignTasks(project.name, edited.name);
      setTasks();

      project.name = edited.name;
      project.description = edited.description;

      setProjects();
      alert('Project is edited');
      // eslint-disable-next-line
      location.reload();
    });
  }
  if (clicked.classList.contains('seeBtn')) {
    if (myProjects.length === 0) {
      makeTaskSecOnClck('My important project', defaultTasks);
    } else {
      makeTaskSecOnClck(currentProject, selectedTasks);
    }
  }
});

first.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target;
  if (clicked.classList.contains('plus')) {
    makeTaskForm();
  }
});

const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target;

  if (clicked.classList.contains('dismissTask')) {
    closeTaskForm();

    return;
  }

  if (clicked.classList.contains('confirmTask')) {
    const newTitle = taskForm[0].value;
    const newComment = taskForm[1].value;
    const newPriority = taskForm[2].value;
    let newDate = taskForm[3].value;

    let confirm = true;

    if (!newTitle) {
      alert('Title must not be empty');
      confirm = false;
      return;
    }

    if (confirm === false) {
      // eslint-disable-next-line
      return false;
    }

    if (!newDate) {
      newDate = setDate();
    }

    const newTask = new Task(newTitle, currentProject, newComment, newPriority, newDate);

    myTasks.push(newTask);
    setTasks();
    const selectedTasks = myTasks.filter((task) => task.projectsN === currentProject);

    makeTaskSection(currentProject, selectedTasks);
    makeToday();
    taskForm.reset();
  }
});

tableArticle.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target;
  // eslint-disable-next-line
  const index = parseInt(clicked.closest('tr').firstElementChild.textContent);

  if (clicked.classList.contains('deleteTaskBtn')) {
    alert('Are you sure?');
    clicked.closest('tr').remove();
    myTasks.splice(index, 1);
    alert('Task deleted');
  }
  setTasks();
  const selectedTasks = myTasks.filter((task) => task.projectsN === currentProject);
  makeTaskSection(currentProject, selectedTasks);
  makeToday();

  if (clicked.classList.contains('statusBTN')) {
    changeStatus(index);
    setTasks();
    const selectedTasks = myTasks.filter((task) => task.projectsN === currentProject);
    makeTaskSection(currentProject, selectedTasks);
    makeToday();
  }

  if (clicked.classList.contains('editTaskBtn')) {
    // eslint-disable-next-line
    const index = parseInt(clicked.closest('tr').firstElementChild.textContent);
    const taskToEdit = myTasks[index];
    makeEditForm(taskToEdit);

    editTaskForm.addEventListener('click', (e) => {
      e.preventDefault();

      const clicked = e.target;
      if (clicked.classList.contains('dismissEditTask')) {
        closeEditTaskForm();
      }

      if (clicked.classList.contains('confirmEditTask')) {
        // eslint-disable-next-line
        const editTitle = editTaskForm[0].value;
        const editComment = editTaskForm[1].value;
        const editPriority = editTaskForm[2].value;
        let editDate = editTaskForm[3].value;
        closeEditTaskForm();
        let confirm = true;

        if (!editTitle) {
          alert('Title must not be empty');
          confirm = false;
          return;
        }

        if (confirm === false) {
          // eslint-disable-next-line
          return false;
        }

        if (!editDate) {
          editDate = setDate();
        }

        taskToEdit.title = editTitle;
        taskToEdit.projectsN = currentProject;
        taskToEdit.comment = editComment;
        taskToEdit.priority = editPriority;
        taskToEdit.deadline = editDate;
        setTasks();
        alert('Task edited');
        // eslint-disable-next-line
        location.reload();
      }
    });
  }
});
