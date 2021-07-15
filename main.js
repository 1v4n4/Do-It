(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{k:()=>$,d:()=>w});const e=()=>{let t=new Date,e=t.getDate(),n=t.getMonth()+1;const s=t.getFullYear();return e<10&&(e=`0${e}`),n<10&&(n=`0${n}`),t=`${s}-${n}-${e}`,t},n=t=>"1"===t?'<i class="fa fa-flag text-danger"></i>':"2"===t?'<i class="fa fa-flag text-warning"></i>':"3"===t?'<i class="fa fa-flag text-info"></i>':"4"===t?'<i class="fa fa-flag text-success"></i>':void 0,s=t=>t?"Finished":"Pending",a=document.getElementById("projectsContainer");function i(t,e){this.name=t,this.description=e}const l=t=>{for(let e=0;e<$.length;e+=1)if($[e].name===t)return!0;return!1},o=t=>{const e=document.createElement("article");e.className="mt-3";const n=document.createElement("h3");n.className="text-center";const s=document.createTextNode(t.name);if(n.appendChild(s),e.appendChild(n),0!==t.description){const n=document.createElement("p");n.className="description text-center fst-italic";const s=document.createTextNode(t.description);n.appendChild(s),e.appendChild(n)}const i=document.createElement("button");i.className="delProjectBtn btn btn-light border-0 bg-secondary",i.innerHTML='<i class="delProjectBtn fa fa-times text-dark"></i>';const l=document.createElement("button");l.className="editProjectBtn btn btn-light border-0 bg-secondary",l.setAttribute("data-bs-toggle","modal"),l.setAttribute("data-bs-target","#exampleModal1"),l.innerHTML='<i class="editProjectBtn fa fa-align-right text-dark"></i>';const o=document.createElement("button");o.className="seeBtn btn btn-light border-0 bg-secondary",o.innerHTML='<i class="seeBtn fa fa-chevron-right text-dark">';const c=document.createElement("div");c.className="d-flex me-5 justify-content-around",c.appendChild(i),c.appendChild(l),c.appendChild(o),e.appendChild(c),a.appendChild(e)},c=()=>{if(0===$.length){const t=new i("My important project","My important project's description");o(t)}else $.forEach((t=>o(t)))};function r(t,e,n,s,a){this.title=t,this.projectsN=e,this.comment=n,this.priority=s,this.deadline=a,this.finished=!1}const d=document.getElementById("first"),m=document.getElementById("taskForm"),p=document.getElementById("editTaskForm"),u=document.getElementById("tableArticle"),f=document.getElementById("todayContainer");let h=!1,b=!1;const y=t=>{const e=document.createElement("table");e.setAttribute("id","tasksTable"),e.classList="table",u.appendChild(e),e.innerHTML="\n  <thead class=\"table-dark\">\n          <tr>\n            <th class='col-1 ps-3'></th>\n            <th class='col-3 ps-3'>Title</th>\n            <th class='col-2'>Priority</th>\n            <th class='col-2'>Status</th>\n            <th class='col-2'>Details</th>\n            <th class='col-1'>Edit</th>\n            <th class='col-1 ps-3'>Delete</th>\n          </tr>\n        </thead>";const a=document.createElement("tbody");a.setAttribute("id","taskBody"),a.className="ps-5",u.appendChild(a),t.forEach((t=>{const e=w.indexOf(t)+1;var i;a.innerHTML+=`\n          <tr>\n            <th scope="row" class='col-1 text-light'>${e}</th>\n            <td class='col-3'>${t.title}</td>\n            <td class='col-2 ps-4'>${n(t.priority)}</td>\n            <td class='col-2 ps-3'><button type='button' class="statusBTN btn p-0 btn-light">${i=t.finished,i?'<i class="fa fa-check  text-dark statusBTN"></i>':'<i class="fa fa-spinner text-dark statusBTN"></i>'}</button></td>\n            <td class='col-2 ps-3'><button type='button' class="btn p-0 btn-light" data-bs-toggle="modal" data-bs-target="#Modal${e}">\n              Details</button><td>\n              <td class='col-1 ps-3'><button type='button' class='editTaskBtn btn p-0 btn-light'><i class="fa fa-wrench text-dark editTaskBtn"></i></button></td>\n            <td class='col-1 ps-3'><button type='button' class='deleteTaskBtn btn p-0 btn-light'><i class="fa fa-trash text-dark deleteTaskBtn"></i></button></td>\n\n          </tr>\n\n          <div class="modal fade" id="Modal${e}" tabindex="-1" aria-labelledby="${e}Label" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title fw-bold " id="${e}Label">${t.title}</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <p class="modalComment">Comment: ${t.comment} </p>\n        <p class="modalPrjct">Project: ${t.projectsN} </p>\n        <p>Priority: ${n(t.priority)}</p>\n        <p>Status: ${s(t.finished)} </p>\n        <p>Deadline: ${t.deadline} </p>\n      </div>\n    </div>\n  </div>\n</div>`}))},g=(t,e)=>{if(h)d.innerHTML="",u.innerHTML="",h=!1;else{const n=document.createElement("div");n.className="p-3",n.innerHTML=`\n  <h2 class='prjct text-center mt-5'>Project: ${t}</h2>\n  <div class=" d-flex justify-content-center plus">\n    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>\n    <button type="button" class="pb-2 text-dark btn btn-light plus">\n      <i class="fa fa-plus plus"></i>\n    </button>\n  </div>`,d.appendChild(n),y(e),h=!0}},v=(t,e)=>{d.innerHTML="",m.innerHTML="",u.innerHTML="";const n=document.createElement("div");n.className="p-3",n.innerHTML=`\n  <h2 class='prjct text-center'>Project: ${t}</h2>\n  <div class=" d-flex justify-content-center plus">\n    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>\n    <button type="button" class="pb-2 text-dark btn btn-light plus">\n      <i class="fa fa-plus plus"></i>\n    </button>\n  </div>`,d.appendChild(n),y(e),h=!0},k=()=>{f.innerHTML="",w.filter((t=>t.deadline===e()&&!1===t.finished)).forEach((t=>{f.innerHTML+=`\n  <div class="card mx-auto mt-3 bg-light">\n            <div class="card-body bg-light">\n              <h5 class="card-title">${t.title}</h5>\n              <p class="card-text">${t.comment}</p>\n            </div>\n            <ul class="list-group  bg-light list-group-flush">\n              <li class="list-group-item bg-light">Project: ${t.projectsN}</li>\n              <li class="list-group-item bg-light">Priority: ${n(t.priority)}</li>\n              <li class="list-group-item bg-light">Status: ${s(t.finished)}</li>\n              <li class="list-group-item bg-light">Deadline: ${t.deadline}</li>\n            </ul>\n\n          </div>`}))},T=document.getElementById("addForm"),j=document.getElementById("nameInput"),x=document.getElementById("descriptionInput"),E=document.getElementById("first"),L=document.getElementById("projectsContainer"),P=document.getElementById("tableArticle"),M=document.getElementById("editForm"),B=document.getElementById("editTaskForm"),N=[{title:"My important project's very important task",projectsN:"My important project",comment:"No comment",priority:"1",deadline:"2021-07-15",finished:!1},{title:"My important project's important task",projectsN:"My important project",comment:"",priority:"2",deadline:"2021-07-14",finished:!1},{title:"My important project's less important task",projectsN:"My important project",comment:"",priority:"3",deadline:"2021-07-24",finished:!1},{title:"My important project's least important task",projectsN:"My important project",comment:"",priority:"4",deadline:"2021-07-31",finished:!1}];let $=[];function C(){window.localStorage.setItem("myProjects",JSON.stringify($))}null!==localStorage.getItem("myProjects")&&($=JSON.parse(window.localStorage.getItem("myProjects")));let I="",w=[];function H(){window.localStorage.setItem("myTasks",JSON.stringify(w))}null!==localStorage.getItem("myTasks")&&(w=JSON.parse(window.localStorage.getItem("myTasks"))),document.addEventListener("DOMContentLoaded",c(),k()),T.addEventListener("submit",(t=>{t.preventDefault();const e=T[0].value,n=T[1].value;let s=!0;if(e||(alert("Project's name can't be empty"),s=!1),l(e)&&(alert("Project with same name already exists"),s=!1),!s)return!1;const a=new i(e,n);$.push(a),C(),L.innerHTML="",c(),T.reset()})),document.getElementById("projectsContainer").addEventListener("click",(t=>{t.preventDefault();const e=t.target;I=e.closest("article").firstElementChild.textContent;const n=w.filter((t=>t.projectsN===I));if(e.classList.contains("delProjectBtn")&&(alert("No kidding?!"),e.closest("article").remove(),((t,e)=>{let n=[];for(let s=0;s<t.length;s+=1)t[s].name===e&&(n=t.splice(s,1))})($,I),(t=>{const e=w.filter((e=>e.projectsN!==t));w=e,d.innerHTML="",u.innerHTML="",f.innerHTML=""})(I),C(),H(),k()),e.classList.contains("editProjectBtn")){const t=$.find((t=>t.name===I));j.value=t.name,x.value=t.description,console.log(t),M.addEventListener("submit",(e=>{e.preventDefault();const n=new i(M[0].value,M[1].value);let s=!0;if(n.name||(alert("Project's name can't be empty"),s=!1),n.name===t.name&&n.description===t.description)return alert("You haven't change anything"),void(s=!1);const a=n.name;var o,c;l(a)&&n.name!==t.name&&(alert("Project with same name already exists"),s=!1),s&&(o=t.name,c=n.name,console.log(o,c),w.forEach((t=>{t.projectsN===o&&(t.projectsN=c)})),H(),t.name=n.name,t.description=n.description,C(),alert("Project is edited"),location.reload())}))}e.classList.contains("seeBtn")&&(0===$.length?g("My important project",N):g(I,n))})),E.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("plus")&&(b?(m.innerHTML="",b=!1):(m.innerHTML="\n    <input type='text' class=' my-2' name='taskName' id='task-name' placeholder='Add title here'>\n    <textarea  id='comment' class='my-2' rows='3' maxlength='150' placeholder='Add comment here'></textarea>\n    <select class='form-select me-4' id='selectPriority' aria-label='Default select example'>\n            <option selected value='1'>Select priority level</option>\n            <option class='one' value='1'>&#xf024; Priority 1</option>\n            <option class='two' value='2'>&#xf024; Priority 2</option>\n            <option class='three' value='3'>&#xf024; Priority 3</option>\n            <option class='four' value='4'>&#xf024; Priority 4</option>\n    </select>\n    <input type=\"date\" max='2110-13-13' id='datePicker'>\n    <button type='button' class='confirmTask btn btn-secondary' id='confirmTask'>Create task</button>\n    <button type='button' class='dismissTask btn btn-light m-3' id='dismissTask'>Dismiss</button>\n  ",document.getElementById("datePicker").setAttribute("min",e()),b=!0))}));const D=document.getElementById("taskForm");D.addEventListener("click",(t=>{t.preventDefault();const n=t.target;if(n.classList.contains("dismissTask"))return D.innerHTML="",void(b=!1);if(n.classList.contains("confirmTask")){const t=D[0].value,n=D[1].value,s=D[2].value;let a=D[3].value,i=!0;if(!t)return alert("Title must not be empty"),void(i=!1);if(!1===i)return!1;a||(a=e());const l=new r(t,I,n,s,a);w.push(l),H();const o=w.filter((t=>t.projectsN===I));v(I,o),k(),D.reset()}})),P.addEventListener("click",(t=>{t.preventDefault();const s=t.target,a=parseInt(s.closest("tr").firstElementChild.textContent)-1;if(s.classList.contains("deleteTaskBtn")&&(alert("Are you sure?"),s.closest("tr").remove(),w.splice(a,1),H(),k()),s.classList.contains("statusBTN")){(t=>{w[t].finished?w[t].finished=!1:w[t].finished=!0})(a),H();const t=w.filter((t=>t.projectsN===I));v(I,t),k()}if(s.classList.contains("editTaskBtn")){i=w[a],p.innerHTML=`\n      <input type='text' class=' my-2' name='EdiTaskName' id='edit-task-name' value='${i.title}'>\n      <textarea  id='editComment' class='my-2' rows='3' maxlength='150'> ${i.comment}</textarea>\n      <select class='form-select me-4' id='selectPriority1' aria-label='Default select example'>\n              <option selected value='1'>Priority ${n(i.priority)}</option>\n              <option class='one' value='1'>&#xf024; Priority 1</option>\n              <option class='two' value='2'>&#xf024; Priority 2</option>\n              <option class='three' value='3'>&#xf024; Priority 3</option>\n              <option class='four' value='4'>&#xf024; Priority 4</option>\n      </select>\n      <input type="date" max='2110-13-13' id='datePicker1' value='${i.date}'>\n      <button type='submit' class='confirmEditTask btn btn-secondary' id='confirmEditTask'>Edit task</button>\n      <button type='button' class='dismissEditTask btn btn-light m-3' id='dismissEditTask'>Dismiss</button>\n    `,document.getElementById("datePicker1").setAttribute("min",e()),B.addEventListener("click",(t=>{t.preventDefault();const n=t.target;if(n.classList.contains("dismissEditTask")&&(B.innerHTML=""),n.classList.contains("confirmEditTask")){const t=B[0].value,n=B[1].value,s=B[2].value;let i=B[3].value,l=!0;if(!t)return alert("Title must not be empty"),void(l=!1);if(!1===l)return!1;i||(i=e());const o=new r(t,I,n,s,i);w.splice(a,1,o),H();const c=w.filter((t=>t.projectsN===I));v(I,c),k(),B.reset()}}))}var i}))})();