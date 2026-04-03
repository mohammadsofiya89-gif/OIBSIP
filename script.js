 function getCurrentTime() {
    let now = new Date();
    return now.toLocaleString();
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = createTaskElement(taskText, getCurrentTime());
    document.getElementById("pendingList").appendChild(li);

    input.value = "";
}

function createTaskElement(taskText, time) {
    let li = document.createElement("li");

    let taskContent = document.createElement("span");
    taskContent.innerText = taskText + " (Added: " + time + ")";

    let actions = document.createElement("div");
    actions.classList.add("task-actions");

    // COMPLETE BUTTON
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.onclick = function () {
        li.classList.add("completed");

        let completedTime = getCurrentTime();
        taskContent.innerText += " | Completed: " + completedTime;

        document.getElementById("completedList").appendChild(li);
        completeBtn.remove(); // remove complete button
    };

    // EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", taskText);
        if (newTask) {
            taskText = newTask;
            taskContent.innerText = newTask + " (Updated)";
        }
    };

    // DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(actions);

    return li;
}