document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addBtn = document.getElementById('addBtn');

    // Event listener for adding tasks
    addBtn.addEventListener('click', function () {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    // Event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    // Function to add a new task
    function addTask(taskContent) {
        if (taskContent.trim() !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${taskContent}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);

            // Event listener for deleting tasks
            const deleteBtn = taskItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                taskItem.remove();
            });
        }
    }
});
