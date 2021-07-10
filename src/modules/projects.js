import { myProjects } from '../index'

const projectsContainer = document.getElementById("projectsContainer");

function Project(name, description) {
  console.log('h')
  this.name = name;
  console.log('he')
  this.description = description;
}

const projectToDom = (project) => {

  const projectArticle = document.createElement('article');

  const projectName = document.createElement('h3');
  projectName.className = '';
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);

  projectArticle.appendChild(projectName);

  if (project.description != 0 ) {
    const projectDescription = document.createElement('p');
    projectDescription.className = 'description fst-italic';
    const projectDescriptionText = document.createTextNode(project.description);
    projectDescription.appendChild(projectDescriptionText);

    projectArticle.appendChild(projectDescription);
  }

  const delProjectBtn = document.createElement('button');
  delProjectBtn.className = 'delProjectBtn btn btn-light border-0 bg-secondary';
  delProjectBtn.innerHTML =`<i class="delProjectBtn fas fa-times text-dark"></i>`;

  const editProjectBtn = document.createElement('button');
  editProjectBtn.className = 'editProjectBtn btn btn-light border-0 bg-secondary';
  editProjectBtn.innerHTML =`<i class="editProjectBtn fas fa-align-right text-dark"></i>`;

  const seeBtn = document.createElement('button');
  seeBtn.className = 'seeBtn btn btn-light border-0 bg-secondary';
  seeBtn.innerHTML = `<i class="seeBtn fas fa-chevron-right text-dark">`;

  const seeDiv = document.createElement('div')
  seeDiv.className ="d-flex mb-5 justify-content-around";
  seeDiv.appendChild(delProjectBtn);
  seeDiv.appendChild(editProjectBtn);
  seeDiv.appendChild(seeBtn);

  projectArticle.appendChild(seeDiv);
  projectsContainer.appendChild(projectArticle);

};

const projectsToDom = () => {
  myProjects.forEach(project => projectToDom(project));
}

const deleteProject = (arr, name) => {

    let a = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].name === name) {
        a = arr.splice(i, 1);
      }
    }
    return a;
}



export { Project, projectToDom, projectsToDom, deleteProject }