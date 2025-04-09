function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  if (task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = task;

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      saveTasks();
    });

    li.addEventListener('dblclick', () => {
      li.remove();
      saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
  }
}

function saveTasks() {
  const tasks = document.getElementById('task-list').innerHTML;
  localStorage.setItem('tasks', tasks);
}

function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    document.getElementById('task-list').innerHTML = tasks;

    document.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
      });
      li.addEventListener('dblclick', () => {
        li.remove();
        saveTasks();
      });
    });
  }
}

window.onload = loadTasks;
