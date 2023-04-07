let tasks = [];

function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  
  if (taskName.length < 6 || taskDescription.length < 21) {
    alert("Task name must be at least 6 characters and task description must be at least 21 characters");
    return;
  }
  
  const task = {
    name: taskName,
    description: taskDescription
  };
  
  tasks.push(task);
  
  displayTasks();
  
  document.getElementById("newTaskForm").reset();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    
    const li = document.createElement("li");
    li.textContent = task.name;
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
      editTask(i);
    };
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTask(i);
    };
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function editTask(index) {
  const task = tasks[index];
  
  const newTaskName = prompt("Enter new task name", task.name);
  const newTaskDescription = prompt("Enter new task description", task.description);
  
  if (newTaskName === null || newTaskDescription === null) {
    return;
  }
  
  if (newTaskName.length < 6 || newTaskDescription.length < 21) {
    alert("Task name must be at least 6 characters and task description must be at least 21 characters");
    return;
  }
  
  task.name = newTaskName;
  task.description = newTaskDescription;
  
  displayTasks();
}

displayTasks();
