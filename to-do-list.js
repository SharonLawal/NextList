// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Get references to important elements
    const taskForm = document.querySelector(".input-new-task");
    const taskInput = document.querySelector(".newTask");
    const taskList = document.querySelector(".tasks");

    // Event listener for the form submission
    taskForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value from the input field
        const taskText = taskInput.value;

        // Check if the input is not empty before adding a new task
        if (taskText.trim() !== "") {
            // Create a new task element
            const newTaskElement = createTaskElement(taskText);

            // Append the new task to the task list
            taskList.appendChild(newTaskElement);

            // Clear the input field after adding the task
            taskInput.value = "";
        }
    });

    // Function to create a new task element with given text
    function createTaskElement(taskText) {
        // Create task container
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");

        // Create content div with input field
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.classList.add("text");
        taskInput.value = taskText;
        taskInput.readOnly = true;

        contentDiv.appendChild(taskInput);

        // Create actions div with edit and delete buttons
        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
        editButton.addEventListener("click", function() {
            // Enable editing of the task text
            taskInput.readOnly = false;

            // Focus on the input to allow immediate editing
            taskInput.focus();

            // Add an event listener to handle editing completion
            taskInput.addEventListener("blur", function handleBlur() {
                // When the input loses focus, update the task text
                taskText = taskInput.value;

                // Set the updated task text in the original input
                taskInput.value = taskText;

                // Set the original input back to readOnly
                taskInput.readOnly = true;

                // Remove the blur event listener to allow future edits
                taskInput.removeEventListener("blur", handleBlur);
            });
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
        deleteButton.addEventListener("click", function() {
            // Remove the task when the delete button is clicked
            taskContainer.remove();
        });

        actionsDiv.appendChild(editButton);  
        actionsDiv.appendChild(deleteButton);

        // Append content and actions divs to the task container
        taskContainer.appendChild(contentDiv);
        taskContainer.appendChild(actionsDiv);

        return taskContainer;
    }
});