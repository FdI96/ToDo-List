(()=>{"use strict";const e=window.localStorage;let t=JSON.parse(e.getItem("projectsArray"));t=t||["Default"],localStorage.setItem("Default","[]");let n=localStorage.getItem("currentProject");n??=localStorage.setItem("currentProject","Default");let r=JSON.parse(localStorage.getItem("projectsArray"));r??=[];let l=JSON.parse(localStorage.getItem("Default"));l??=[];class i{constructor(e,t,n,r){this.title=e,this.description=t,this.date=n,this.priority=r}print(){let e=document.createElement("div"),t=null;t="low"==this.priority?"primary":"medium"==this.priority?"warning":"danger",e.setAttribute("class",`card text-white bg-${t}`);let n=document.createElement("div");n.setAttribute("class","card-header text-white"),console.log(n),n.innerHTML=this.title,e.appendChild(n);let r=document.createElement("div");r.setAttribute("class","card-body text-white"),e.appendChild(r);let l=document.createElement("h5");l.setAttribute("class","card-title text-white"),l.innerHTML=this.description,r.appendChild(l);let i=document.createElement("p");return i.setAttribute("class","card-text text-white"),i.innerHTML=this.date,r.appendChild(i),i=document.createElement("p"),i.setAttribute("class","card-text text-white"),i.innerHTML=this.priority,r.appendChild(i),e}}let a=JSON.parse(localStorage.getItem("allToDosArray"));console.log(a),a=a||[];const c=document.getElementById("content"),d=(()=>{const e=document.createElement("div");e.setAttribute("class","col-4");const r=document.createElement("div");r.setAttribute("class","row");const i=document.createElement("h1");i.setAttribute("class","col-8"),i.innerHTML="Projects",r.appendChild(i);const a=(()=>{const e=document.createElement("form");e.setAttribute("id","idForm");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","Project name"),t.setAttribute("id","nameField"),e.appendChild(t);const n=document.createElement("span");n.setAttribute("class","col-4");const r=document.createElement("button");return r.setAttribute("type","submit"),r.setAttribute("id","buttonSubmit"),r.innerHTML="Add project",n.appendChild(r),e.appendChild(n),e})();r.appendChild(a);const c=document.createElement("ul");for(let e=0;e<t.length;e++){let r=document.createElement("li"),i=document.createElement("button");i.innerHTML=t[e],i.addEventListener("click",(e=>{localStorage.setItem("currentProject",e.target.innerHTML),l=JSON.parse(localStorage.getItem(e.target.innerHTML))})),r.appendChild(i),c.appendChild(r),l=JSON.parse(localStorage.getItem(n)),console.log(l)}return e.appendChild(r),e.appendChild(c),a.children[1].children[0].addEventListener("click",(e=>{e.preventDefault(),t.push(a.children[0].value);let n=document.createElement("li"),r=document.createElement("button");r.innerHTML=a.children[0].value,r.addEventListener("click",(e=>{localStorage.setItem("currentProject",e.target.innerHTML),l=JSON.parse(localStorage.getItem(e.target.innerHTML))})),localStorage.setItem("currentProject",a.children[0].value),localStorage.setItem(a.children[0].value,JSON.stringify([])),l=JSON.parse(localStorage.getItem(e.target.value)),console.log(l),n.appendChild(r),c.appendChild(n),localStorage.setItem("projectsArray",JSON.stringify(t))})),e})();c.appendChild(d);const o=(()=>{const e=document.createElement("div");e.setAttribute("class","col-8");const t=document.createElement("h2");t.setAttribute("class","text-center"),t.innerHTML="List of ToDo",e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","toDoListBlock"),n.appendChild((()=>{const e=document.createElement("form"),t=document.createElement("div");e.appendChild(t);let n=document.createElement("label");n.setAttribute("for","title"),n.innerHTML="Title:",t.appendChild(n);let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","title"),t.appendChild(r);const l=document.createElement("div");e.appendChild(l),n=document.createElement("label"),n.innerHTML="Description:",n.setAttribute("for","description"),l.appendChild(n),r=document.createElement("input"),r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("id","description"),l.appendChild(r);const i=document.createElement("div");e.appendChild(i),n=document.createElement("label"),n.innerHTML="Due Date: ",n.setAttribute("for","dueDate"),i.appendChild(n),r=document.createElement("input"),r.setAttribute("type","date"),r.setAttribute("name","dueDate"),r.setAttribute("id","dueDate"),i.appendChild(r);const a=document.createElement("div");e.appendChild(a),n=document.createElement("label"),n.innerHTML="Priority:",n.setAttribute("for","priority"),a.appendChild(n);for(let e=0;e<3;e++){let t;switch(r=document.createElement("input"),e){case 0:t="low";break;case 1:t="medium";break;case 2:t="urgent"}n=document.createElement("label"),n.setAttribute("for",t),n.innerHTML=t,a.appendChild(n),r.setAttribute("type","radio"),r.setAttribute("name",t),r.setAttribute("id",t),a.appendChild(r)}const c=document.createElement("input");return e.appendChild(c),c.setAttribute("type","submit"),c.setAttribute("id","submitButton"),e})()),e.appendChild(n);const r=document.createElement("div");r.setAttribute("id","toDoListShow");for(let t=0;t<a.length;t++){let n=new i(a[t].title,a[t].description,a[t].date,a[t].priority).print();r.appendChild(n),e.appendChild(r)}return e})();c.appendChild(o),document.getElementById("submitButton").addEventListener("click",(e=>{e.preventDefault();let t=document.getElementById("title").value,n=document.getElementById("description").value,r=document.getElementById("dueDate").value,l=(()=>{let e=document.getElementById("low"),t=document.getElementById("medium"),n=document.getElementById("urgent"),r=null;return r=e.checked?e.name:t.checked?t.name:n.name,r})(),c=new i(t,n,r,l);o.appendChild(c.print()),a.push(c),localStorage.setItem("allToDosArray",JSON.stringify(a))}))})();