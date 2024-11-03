const addTaskBtn = document.getElementById("addtask");
const addForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel");
const modal = document.getElementById("modal");
const toDoList = document.getElementById("to-do-list");
const inProgressList = document.getElementById("in-progress-list");
const doneList = document.getElementById("done-list");
let todoCounter = document.getElementById("todo");
let doingCounter = document.getElementById("Doing");
let doneCounter = document.getElementById("done");


let tasks = []  

addTaskBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    addForm.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    addForm.classList.toggle("hidden");
    modal.classList.toggle("hidden");
});

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const category = document.getElementById("task-category").value;

    let task = {
        title: title,
        date: date,
        priority: priority,
        category: category,
        // discription:discription,
    };
    tasks.unshift(task);

    const taskElement = document.createElement("div");
    taskElement.classList.add("p-4", "rounded", "border", "text-white");
    taskElement.innerHTML = `
        <strong>Title: ${title}</strong><br>
        <span>Date: ${date}</span><br>
        <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
        <button class="edit-btn bg-yellow-500 text-white px-3 py-1 rounded-md">Edit</button>
    `;

    // Add priority class
    switch (priority) {
        case "P1 (en rouge)":
            taskElement.classList.add("bg-red-600");
            break;
        case "P2 (en orange)":
            taskElement.classList.add("bg-orange-600");
            break;
        case "P3 (en vert)":
            taskElement.classList.add("bg-green-600");
            break;
    }

    // Append task to the correct category list
    switch (category) {
        case "to-do-list":
            toDoList.appendChild(taskElement);
            break;
        case "in-progress-list":
            inProgressList.appendChild(taskElement);
            break;
        case "done-list":
            doneList.appendChild(taskElement);
            break;
    }

    // Reset the form and close the modal
    addForm.reset();
    addForm.classList.toggle("hidden");
    modal.classList.toggle("hidden");

    // Update counters
    updateCounters();
});

// Function to update task counters
function updateCounters() {
    todoCounter.textContent = toDoList.children.length;
    doingCounter.textContent = inProgressList.children.length;
    doneCounter.textContent = doneList.children.length;
}
