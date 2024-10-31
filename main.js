const addTaskBtn = document.getElementById("task");
const addForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel");
const toDoList = document.getElementById("to-do-list");
const modal = document.getElementById("modal");
const inProgressList = document.getElementById("in-progress-list");
const doneList = document.getElementById("done-list");

addTaskBtn.addEventListener("click", () => {
    modal.classList.remove("hidden"); 
    addForm.classList.remove("hidden"); 
});

cancelBtn.addEventListener("click", () => {
    addForm.classList.add("hidden");
    modal.classList.add("hidden"); 
});

addForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const category = document.getElementById("task-category").value;

    const taskElement = document.createElement("div");
    taskElement.classList.add("p-4", "rounded", "border", "white");

    if (priority.includes("P1 (en rouge)")) {
        taskElement.classList.add("bg-red-600");
    } else if (priority.includes("P2 (en orange)")) {
        taskElement.classList.add("bg-orange-600");
    } else if (priority.includes("P3 (en vert)")) {
        taskElement.classList.add("bg-green-600");
    }
    taskElement.innerHTML = `<strong>${title}</strong><br><span>${date}</span>`;

    
    if (category === "to-do-list") {
        toDoList.appendChild(taskElement);
    } else if (category === "in-progress-list") {
        inProgressList.appendChild(taskElement);
    } else if (category === "done-list") {
        doneList.appendChild(taskElement);
    }
    addForm.reset();
    addForm.classList.add("hidden"); 
    modal.classList.add("hidden"); 
});

