const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


function addTodo(event)
{
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //CHECK MARK BTN
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //CHECK TRASH BTN
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    //Change background image onclick
    var colors = ["#adbeed", "#a6e3b6", "#bfa6e3", "#e3a6a6", "#faeec3"];
    var randNum = Math.floor(Math.random()*3) + 1;
    var randNum2 = Math.floor(Math.random()*3) + 1;
    for(var i = 0; i < colors.length;i++)
    {
        document.body.style.backgroundImage = "linear-gradient(180deg, "+colors[randNum]+","+colors[randNum2]+")";
    }

    //Clear Input value
    todoInput.value = "";

}

function deleteCheck(event)
{
    const item = event.target;
    console.log(item.classList[0]);
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        //Animation delete
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e)
{
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value)
        {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";
                }
                break;
        }
    })
}
