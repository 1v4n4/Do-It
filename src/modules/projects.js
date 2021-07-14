// eslint-disable-next-line
import { myProjects } from '../index';

const projectsContainer = document.getElementById('projectsContainer');

function Project(name, description) {
  this.name = name;

  this.description = description;
}

const checkProject = (value) => {
  for (let i = 0; i < myProjects.length; i += 1) {
    if (myProjects[i].name === value) {
      return true;
    }
  }
  return false;
};

const projectToDom = (project) => {
  const projectArticle = document.createElement('article');
  projectArticle.className = 'mt-3';

  const projectName = document.createElement('h3');
  projectName.className = 'text-center';
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);

  projectArticle.appendChild(projectName);

  if (project.description !== 0) {
    const projectDescription = document.createElement('p');
    projectDescription.className = 'description text-center fst-italic';
    const projectDescriptionText = document.createTextNode(project.description);
    projectDescription.appendChild(projectDescriptionText);

    projectArticle.appendChild(projectDescription);
  }

  const delProjectBtn = document.createElement('button');
  delProjectBtn.className = 'delProjectBtn btn btn-light border-0 bg-secondary';
  delProjectBtn.innerHTML = '<i class="delProjectBtn fa fa-times text-dark"></i>';

  const editProjectBtn = document.createElement('button');
  editProjectBtn.className = 'editProjectBtn btn btn-light border-0 bg-secondary';
  editProjectBtn.setAttribute('data-bs-toggle', 'modal');
  editProjectBtn.setAttribute('data-bs-target', '#exampleModal1');
  editProjectBtn.innerHTML = '<i class="editProjectBtn fa fa-align-right text-dark"></i>';

  const seeBtn = document.createElement('button');
  seeBtn.className = 'seeBtn btn btn-light border-0 bg-secondary';
  seeBtn.innerHTML = '<i class="seeBtn fa fa-chevron-right text-dark">';

  const seeDiv = document.createElement('div');
  seeDiv.className = 'd-flex me-5 justify-content-around';
  seeDiv.appendChild(delProjectBtn);
  seeDiv.appendChild(editProjectBtn);
  seeDiv.appendChild(seeBtn);

  projectArticle.appendChild(seeDiv);
  projectsContainer.appendChild(projectArticle);
};

const projectsToDom = () => {
  myProjects.forEach((project) => projectToDom(project));
};

const deleteProject = (arr, value) => {
  let a = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === value) {
      a = arr.splice(i, 1);
    }
  }
  return a;
};

export {
  Project, projectToDom, projectsToDom, deleteProject, checkProject,
};