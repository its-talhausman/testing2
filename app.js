const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const list = document.getElementById('list');

function load() {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  list.innerHTML = '';
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t;
    li.addEventListener('click', () => remove(i));
    list.appendChild(li);
  });
}

function save(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function add() {
  if (!taskInput.value.trim()) return;
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.push(taskInput.value.trim());
  save(todos);
  taskInput.value = '';
  load();
}

function remove(index) {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.splice(index, 1);
  save(todos);
  load();
}

addBtn.addEventListener('click', add);
window.addEventListener('load', load);
