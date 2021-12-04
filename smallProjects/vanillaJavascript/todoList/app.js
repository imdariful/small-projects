// Selectors
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");
// Functions
const addTodo = (e) => {
    if(todoInput.value !== ""){
          // prevent from submitting defaults
  e.preventDefault();
  // Creating a div element under ul
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Creating Li element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Creating Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  // Creating Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = '<i class = "fas fa-trash"> </i>';
  todoDiv.appendChild(deleteButton);
  console.log(todoDiv);
  console.log(newTodo);
  console.log(deleteButton);

  // Append Div to ul
  todoList.appendChild(todoDiv);
//   Clear Input value
    todoInput.value = "";
    } else{
        alert('Please type in the input field')
    }
};

// Delete Todo


const deleteTodo = (e) => {
        const item = e.target;
        if(item.classList[0]=== 'delete-button'){
            const parentTodo = item.parentElement
            parentTodo.classList.add('dropped')
            parentTodo.addEventListener('transitioned', (e)=>{
                parentTodo.remove();
            })

        }
        if(item.classList[0] === 'complete-button'){
            const parentTodo = item.parentElement
            parentTodo.classList.toggle('completed')
        }
}

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo)


