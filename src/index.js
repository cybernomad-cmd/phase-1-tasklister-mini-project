const form = document.querySelector('#create-task-form');
const input = document.querySelector('#new-task-description');
const taskList = document.querySelector('#tasks');

if (form && input && taskList) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement('li');
    li.textContent = value;

    taskList.appendChild(li);

    input.value = '';
  });
}