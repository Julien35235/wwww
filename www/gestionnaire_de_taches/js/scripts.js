function addTask() {
    let task = document.getElementById("newTask").value;
    if (task.trim() === '') {
        alert("Veuillez entrer une tâche!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;
    li.onclick = function() {
        this.parentNode.removeChild(this);
    }

    document.getElementById("taskList").appendChild(li);
    document.getElementById("newTask").value = "";
}
