const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("task") ?
   JSON.parse(localStorage.getItem("task")) : [];
showAlltasks();

function showAlltasks() {
   tasks.forEach((Value, index) => {

      const div = document.createElement("div");
      div.setAttribute("class", "task");

      const innerDiv = document.createElement("div");
      div.append(innerDiv);

      const p = document.createElement("p");
      p.innerText = Value.title
      innerDiv.append(p);

      const span = document.createElement("span");
      span.innerText = Value.description;
      innerDiv.append(span);

      const btn = document.createElement("button");
      btn.setAttribute("class", "deletebtn");
      btn.innerText = "-";
      div.append(btn);

      btn.addEventListener("click", () => {
         removeTasks();
         tasks.splice(index, 1);
         localStorage.setItem("task", JSON.stringify(tasks));
         showAlltasks();
      })

      container.append(div);
   });
}

function removeTasks() {
   tasks.forEach(() => {
      const div = document.querySelector(".task");
      div.remove();
   });
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   removeTasks();

   tasks.push({
      title: title.value,
      description: description.value,
   });
   console.log(tasks);
   localStorage.setItem("tasks", JSON.stringify(tasks));
   showAlltasks();
});