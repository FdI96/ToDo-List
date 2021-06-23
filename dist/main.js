(()=>{"use strict";const e=window.localStorage;let t=JSON.parse(e.getItem("projectsArray"));t=t||["Default"];let n=JSON.parse(localStorage.getItem("projectsArray"));n=n||[];const i=document.getElementById("content"),r=(()=>{const e=document.createElement("div");e.setAttribute("class","col-4");const n=document.createElement("div");n.setAttribute("class","row");const i=document.createElement("h1");i.setAttribute("class","col-8"),i.innerHTML="Projects",n.appendChild(i);const r=(()=>{const e=document.createElement("form");e.setAttribute("id","idForm");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","Project name"),t.setAttribute("id","nameField"),e.appendChild(t);const n=document.createElement("span");n.setAttribute("class","col-4");const i=document.createElement("button");return i.setAttribute("type","submit"),i.setAttribute("id","buttonSubmit"),i.innerHTML="Add project",n.appendChild(i),e.appendChild(n),e})();n.appendChild(r);const d=document.createElement("ul");for(let e=0;e<t.length;e++){let n=document.createElement("li"),i=document.createElement("button");i.innerHTML=t[e],n.appendChild(i),d.appendChild(n)}return e.appendChild(n),e.appendChild(d),r.children[1].children[0].addEventListener("click",(e=>{e.preventDefault(),t.push(r.children[0].value);let n=document.createElement("li"),i=document.createElement("button");i.innerHTML=r.children[0].value,n.appendChild(i),d.appendChild(n),localStorage.setItem("projectsArray",JSON.stringify(t))})),e})();i.appendChild(r);const d=(()=>{const e=document.createElement("div");e.setAttribute("class","col-8");const t=document.createElement("h2");t.setAttribute("class","text-center"),t.innerHTML="List of ToDo",e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","toDoListBlock");const i=document.createElement("form");i.setAttribute("onsubmit","onSubmitFuction(this)"),n.appendChild(i),e.appendChild(n);const r=document.createElement("div");i.appendChild(r);let d=document.createElement("label");d.setAttribute("for","title"),d.innerHTML="Title:",r.appendChild(d);let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","title"),c.setAttribute("id","title"),r.appendChild(c);const l=document.createElement("div");i.appendChild(l),d=document.createElement("label"),d.innerHTML="Description:",d.setAttribute("for","description"),l.appendChild(d),c=document.createElement("input"),c.setAttribute("type","text"),c.setAttribute("name","description"),c.setAttribute("id","description"),l.appendChild(c);const a=document.createElement("div");i.appendChild(a),d=document.createElement("label"),d.innerHTML="Due Date: ",d.setAttribute("for","dueDate"),a.appendChild(d),c=document.createElement("input"),c.setAttribute("type","date"),c.setAttribute("name","dueDate"),c.setAttribute("id","dueDate"),a.appendChild(c);const o=document.createElement("div");i.appendChild(o),d=document.createElement("label"),d.innerHTML="Priority:",d.setAttribute("for","priority"),o.appendChild(d);for(let e=0;e<3;e++){c=document.createElement("input");let t=null;switch(e){case 0:t="Low";break;case 1:t="Medium";break;case 2:t="Urgent"}d=document.createElement("label"),d.setAttribute("for","priority"),d.innerHTML=t,o.appendChild(d),c.setAttribute("type","radio"),c.setAttribute("name","priority"),c.setAttribute("id","priority"),o.appendChild(c)}const u=document.createElement("input");return i.appendChild(u),u.setAttribute("type","submit"),u.setAttribute("id","submitButton"),e})();i.appendChild(d)})();