//import { getProjects } from './storage'

function Project(name, description) {
  console.log('h')
  this.name = name;
  console.log('he')
  this.description = description;
}

const projectToDom = (project) => {
  const projectsContainer = document.getElementById("projectsContainer");


  const projectName = document.createElement('p');
  projectName.className = '';
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);

  projectsContainer.appendChild(projectName);

  if (project.description != 0 ) {
    const projectDescription = document.createElement('p');
    projectDescription.className = '';
    const projectDescriptionText = document.createTextNode(project.name);
    projectDescription.appendChild(projectDescriptionText);

    projectsContainer.appendChild(projectDescription);
  }
};

const projectsToDom = () => {
  myProjects.forEach(project => projectToDom(project));
}

export { Project, projectToDom, projectsToDom }