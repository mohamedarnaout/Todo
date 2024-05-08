let btn = document.getElementsByClassName("add_btn")[0];
let list = document.getElementsByClassName("todo_list")[0];
let newTask = document.getElementsByClassName("add_todo")[0];

btn.addEventListener("click", () => {
  let para = document.createElement("p");
  let task = document.createTextNode(newTask.value);
  para.appendChild(task);
  list.appendChild(para).classList.add("todo_task");
  newTask.value = "";
});
