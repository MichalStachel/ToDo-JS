const ul = document.querySelector('ul');
const li = document.getElementsByClassName('index');
const input = document.querySelector('input');
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const look = document.getElementById('sec');



const addList = () => {
  event.preventDefault();
  const item = input.value;
  console.log(item);
  if (item === '') return;
  const task = document.createElement('li');
  task.className = 'index';
  task.innerHTML = `${item} <button>Usuń</button>`;
  ul.appendChild(task);
  taskNumber.textContent = li.length;
  task.querySelector('button').addEventListener('click', del);
}

const del = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = li.length;
}

const search = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...li];
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li))
}

look.addEventListener('input', search)
form.addEventListener('submit', addList)