// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // select the add Task button
    const addButton = document.getElementById('add-task-btn');

    // select the task input field
    const taskInput = document.getElementById('task-input');

    // select the task list where tasks will be listed
    const taskList = document.getElementById('task-list');

    // function to add new task to the list
    function addTask() {
        // get the text from the input field and trim whitespace
        const taskText = taskInput.value.trim();

        // check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        // create list item (li) element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

        // add the 'remove-btn' class using classList.add
        removeButton.classList.add('remove-btn');

        // add listener to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem)
        }

        // append the remove button to the task item
        listItem.appendChild(removeButton);

        // append the task item to the task list
        taskList.appendChild(listItem);

        // clear the input field after adding the task
        taskInput.value = '';
    }

    // event listener for 'Add Task' button
    addButton.addEventListener('click', addTask);

    // event listener for pressing 'Enter' in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

})