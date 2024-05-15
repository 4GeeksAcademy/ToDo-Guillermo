const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const task = taskInput.value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}