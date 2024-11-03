const addTaskBtn = document.getElementById("addtask");
const addForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel");
const modal = document.getElementById("modal");
const toDoList = document.getElementById("to-do-list");
const inProgressList = document.getElementById("in-progress-list");
const doneList = document.getElementById("done-list");
const todoCounter = document.getElementById("todo");
const doingCounter = document.getElementById("Doing");
const doneCounter = document.getElementById("done");

let tasks = [];  

// Show modal and form when 'Add Task' is clicked
addTaskBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    addForm.classList.remove("hidden");
});

// Hide modal and form when 'Cancel' is clicked
cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    addForm.classList.add("hidden");
});

// Handle form submission
addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = {
        title: document.getElementById("task-title").value,
        description: document.getElementById("task-desc").value,
        date: document.getElementById("task-date").value,
        priority: document.getElementById("task-priority").value,
        category: document.getElementById("task-category").value,
    };
    
    // Add the task to the task list
    tasks.unshift(task);
    const taskElement = createTaskElement(task);

    // Add task element to the selected category list
    addTaskToCategoryList(taskElement, task.category);

    // Reset the form and hide the modal
    addForm.reset();
    modal.classList.add("hidden");
    updateCounters();
});

// Create a task element with proper styling
function createTaskElement(task) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("p-4", "rounded", "border", "text-white", "task-item", "space-y-2");

    // Title and Date
    const titleElement = document.createElement("h3");
    titleElement.classList.add("text-lg","text-black", "font-semibold", "flex", "items-center");
    titleElement.textContent = task.title;

    const dateElement = document.createElement("small");
    dateElement.classList.add("ml-2", "text-black-300", "text-sm");
    dateElement.textContent = `(${task.date})`;

    titleElement.appendChild(dateElement); // Append date to the title
    taskElement.appendChild(titleElement);

    // Description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-black","my-2", "text-sm");
    descriptionElement.textContent = task.description;
    taskElement.appendChild(descriptionElement);

    // Buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("flex", "space-x-2");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "bg-red-500", "text-black", "px-3", "py-1", "rounded-md");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        deleteTask(taskElement, task.category);
    });
    buttonsContainer.appendChild(deleteBtn);

    // Edit button (if needed, add functionality here)
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn", "bg-yellow-500", "text-white", "px-3", "py-1", "rounded-md");
    editBtn.textContent = "Edit";
    buttonsContainer.appendChild(editBtn);

    taskElement.appendChild(buttonsContainer);

    // Apply priority color based on task priority
    switch (task.priority) {
        case "P1":
            taskElement.classList.add("border-4", "border-red-500");
            break;
        case "P2":
            taskElement.classList.add("border-4","border-orange-500");
            break;
        case "P3":
            taskElement.classList.add("border-4","border-green-500");
            break;
    }

    return taskElement;
}

// Append task element to the correct list based on category
function addTaskToCategoryList(taskElement, category) {
    switch (category) {
        case "TODO":
            toDoList.appendChild(taskElement);
            break;
        case "DOING":
            inProgressList.appendChild(taskElement);
            break;
        case "DONE":
            doneList.appendChild(taskElement);
            break;
    }
}

// Delete task and update counters
function deleteTask(taskElement, category) {console.log(taskElement)
debugger
    taskElement.remove();
    updateCounters();
}

// Update the counters for each category
function updateCounters() {
    todoCounter.textContent = toDoList.children.length;
    doingCounter.textContent = inProgressList.children.length;
    doneCounter.textContent = doneList.children.length;
}
