(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("nav"),n=document.createElement("h1");n.innerText="Restaurant Page",t.appendChild(n);const c=document.createElement("div");c.classList.add("buttonsDiv"),t.appendChild(c);const i=document.createElement("button");i.setAttribute("id","home"),i.innerText="Home";const o=document.createElement("button");o.setAttribute("id","menu"),o.innerText="Menu";const d=document.createElement("button");d.innerText="Contact",d.setAttribute("id","contact"),c.append(i,o,d),e.appendChild(t)},t=function(){e(),function(){const e=document.createElement("div");e.setAttribute("id","homeContainer"),content.appendChild(e)}(),function(){const e=document.getElementById("homeContainer"),t=document.createElement("div");t.classList.add("imgsHomeContainer");const n=document.createElement("div");n.classList.add("manoelDiv");const c=document.createElement("img");c.classList.add("imgOwner"),c.setAttribute("src","imgs/manoel.png"),n.appendChild(c);const i=document.createElement("p");i.innerText="Manoel Gomes - Caneta Azul",n.appendChild(i);const o=document.createElement("div");o.classList.add("rockDiv");const d=document.createElement("img");d.classList.add("imgOwner"),d.setAttribute("src","imgs/therock.png"),o.appendChild(d);const a=document.createElement("p");a.innerText="Dwayne Johnson - The Rock",o.appendChild(a),t.append(n,o),e.appendChild(t)}(),function(){const e=document.getElementById("homeContainer"),t=document.createElement("div");t.classList.add("secondSection");const n=document.createElement("img");n.setAttribute("src","imgs/rockmanoel.png"),n.classList.add("rockManoelImg"),t.appendChild(n);const c=document.createElement("h2");c.innerText="How it all began...",c.classList.add("secondSectionTitle");const i=document.createElement("p");i.classList.add("secondSectionText"),i.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi reprehenderit, iure, rem voluptatum a aperiam minus, nisi totam incidunt delectus doloremque dicta hic. Libero animi distinctio ex vero, repellat est. Dolorum nihil corporis nobis eveniet saepe enim dolorem, cumque quae deserunt corrupti magni. Vero, quae reprehenderit quasi ipsam numquam velit esse saepe aliquid magni ut placeat aliquam quod ipsum, cumque porro? Sunt, incidunt aperiam fugit at fuga quisquam laudantium repudiandae corrupti sint voluptas officiis eveniet sed expedita molestiae accusamus illum itaque quod necessitatibus porro beatae suscipit laborum!";const o=document.createElement("div");o.classList.add("secondSectionTextsDiv"),o.append(c,i),t.appendChild(o),e.appendChild(t)}()},n=function(){e(),function(){const e=document.createElement("div");e.classList.add("menuContainer"),content.appendChild(e)}(),function(){const e=document.createElement("div");e.setAttribute("id","foodContainer");const t=document.querySelector(".menuContainer");e.classList.add("foodContainer");const n=document.createElement("div");n.classList.add("food");const c=document.createElement("img");c.setAttribute("src","imgs/bluebanana.png");const i=document.createElement("h3");i.textContent="Blue Banana";const o=document.createElement("p");o.textContent="~ 1000Kz";const d=document.createElement("div");d.append(i,o),n.append(c,d);const a=document.createElement("div");a.classList.add("food");const s=document.createElement("img");s.setAttribute("src","imgs/kiwi.png");const m=document.createElement("h3");m.textContent="Kiwi";const u=document.createElement("p");u.textContent="~ 2500Kz";const r=document.createElement("div");r.append(m,u),a.append(s,r);const l=document.createElement("div");l.classList.add("food");const p=document.createElement("img");p.setAttribute("src","imgs/caneta-burger.jpg");const E=document.createElement("h3");E.textContent="Caneta Burger";const v=document.createElement("p");v.textContent="~ 5000Kz";const g=document.createElement("div");g.append(E,v),l.append(p,g),e.append(n,a,l),t.appendChild(e)}()},c=function(){e(),function(){const e=document.createElement("div");e.classList.add("menuContainer"),content.appendChild(e)}()};function i(){document.querySelector("#content").innerHTML=""}function o(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.classList.add("active"),t.classList.remove("active"),n.classList.remove("active")}function d(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.classList.remove("active"),t.classList.add("active"),n.classList.remove("active")}function a(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.classList.remove("active"),t.classList.remove("active"),n.classList.add("active")}n(),function e(){const s=document.getElementById("home");s.addEventListener("click",i),s.addEventListener("click",t),s.addEventListener("click",e),s.addEventListener("click",o);const m=document.getElementById("menu");m.addEventListener("click",i),m.addEventListener("click",n),m.addEventListener("click",e),m.addEventListener("click",d);const u=document.getElementById("contact");u.addEventListener("click",i),u.addEventListener("click",c),u.addEventListener("click",e),u.addEventListener("click",a)}(),o()})();