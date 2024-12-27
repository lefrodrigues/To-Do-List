// Selecionando elementos do DOM
const btnAddTask = document.getElementById("btnAddTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Função para adicionar tarefas
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    // Criar elemento <li> para a tarefa
    const li = document.createElement("li");

    // Adicionar o conteúdo no <li>
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Excluir</button>
    `;

    // Estilizar os botões
    const editButton = li.querySelector(".edit-btn");
    const deleteButton = li.querySelector(".delete-btn");
    editButton.className = "btn";
    deleteButton.className = "btn";

    // Adicionar eventos aos botões
    editButton.addEventListener("click", () => editTask(li));
    deleteButton.addEventListener("click", () => deleteTask(li));

    // Adicionar a tarefa na lista
    taskList.appendChild(li);

    // Limpar o campo de entrada
    taskInput.value = "";
    taskInput.focus();
}

// Função para editar uma tarefa
function editTask(taskElement) {
    const taskTextElement = taskElement.querySelector("span");
    const newTaskText = prompt("Edite a tarefa:", taskTextElement.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskTextElement.textContent = newTaskText.trim();
    }
}

// Função para excluir uma tarefa
function deleteTask(taskElement) {
    taskElement.remove();
}

// Adicionar evento ao botão "Adicionar Tarefa"
btnAddTask.addEventListener("click", addTask);

// Adicionar funcionalidade de "Enter" no input
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
