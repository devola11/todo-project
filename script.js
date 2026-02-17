const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoBody = document.getElementById("todoBody");

let todos = [];
let counter = 1;

const addTodo = () => {
  const value = todoInput.value;
  if (value === "") {
    alert("Field cannot be empty");
    return;
  }

  const todo = {
    id: counter,
    task: value,
    date: new Date().toLocaleDateString(),
  };

  todos.push(todo);
  counter++;
  todoInput.value = "";
  renderTodos();
};

const renderTodos = () => {
  todoBody.innerHTML = "";

  todos.forEach((todo) => {
    const row = document.createElement("tr");

    row.innerHTML = `<td> ${todo.id} </td> <td> ${todo.task}</td> <td> ${todo.date} </td> <td> <span class = "edit-btn">Edit</span> <span class = "delete-btn">Delete</span> </td>
    `;

    todoBody.appendChild(row);
  });
};

// Event Listener

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});
