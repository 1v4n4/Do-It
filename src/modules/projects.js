import { myProjects } from '../index'

function Project(name, description) {
  console.log('h')
  this.name = name;
  console.log('he')
  this.description = description;
}

const projectToDom = (project) => {
  const projectsContainer = document.getElementById("projectsContainer");


  const projectName = document.createElement('h3');
  projectName.className = '';
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);

  projectsContainer.appendChild(projectName);

  if (project.description != 0 ) {
    const projectDescription = document.createElement('p');
    projectDescription.className = 'fst-italic';
    const projectDescriptionText = document.createTextNode(project.description);
    projectDescription.appendChild(projectDescriptionText);

    projectsContainer.appendChild(projectDescription);
  }

  const delProjectBtn = document.createElement('button');
  delProjectBtn.className = 'delProjectBtn btn btn-light border-0 bg-secondary';
  delProjectBtn.innerHTML =`<i class="fas fa-times text-dark"></i>`;

  const editProjectBtn = document.createElement('button');
  editProjectBtn.className = 'delProjectBtn btn btn-light border-0 bg-secondary';
  editProjectBtn.innerHTML =`<i class="fas fa-align-right text-dark"></i>`;

  const seeBtn = document.createElement('button');
  seeBtn.className = 'seeBtn btn btn-light border-0 bg-secondary';
  seeBtn.innerHTML =`<i class="fas fa-chevron-right text-dark">`;

  const seeDiv = document.createElement('div')
  seeDiv.className ="d-flex mb-5 justify-content-around";
  seeDiv.appendChild(delProjectBtn);
  seeDiv.appendChild(editProjectBtn);
  seeDiv.appendChild(seeBtn);
  projectsContainer.appendChild(seeDiv);

};

const projectsToDom = () => {
  myProjects.forEach(project => projectToDom(project));
}

export { Project, projectToDom, projectsToDom }