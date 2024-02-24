function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.onclick = toggleCompleted;
    // taskItem.style.color = "darkblue";
    taskItem.style.fontSize = "20px";
    taskItem.classList.add("mt-2", "text-dark");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-outline-warning", "ml-2");
    editButton.onclick = editTask;
    taskItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-outline-danger", "ml-2");
    deleteButton.onclick = deleteTask;
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    input.value = "";
  }
}

function editTask(event) {
  const taskItem = event.target.parentNode;
  const newText = prompt("Enter new task:");

  if (newText !== null) {
    taskItem.textContent = newText;
    taskItem.onclick = toggleCompleted;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-outline-warning", "ml-2");
    editButton.onclick = editTask;
    taskItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-outline-danger", "ml-2");
    deleteButton.onclick = deleteTask;
    taskItem.appendChild(deleteButton);
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.remove();
}
function toggleCompleted() {
  this.classList.toggle("completed");
}
