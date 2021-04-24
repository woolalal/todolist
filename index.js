let todoInput = document.querySelector(".user-input");
const inputBtn = document.querySelector(".input-btn");
const inputul = document.querySelector(".todo-list");


inputBtn.addEventListener("click", addTodo);
inputul.addEventListener("click", checkDelete);


function addTodo(event)
{
    event.preventDefault();

    if(todoInput.value.length == 0)
    {
        alert("Task input field can't be empty!");
    }

    else
    {
        let tododiv = document.createElement("div");
        tododiv.classList.add("todo");

        let todoli = document.createElement("li");
        todoli.innerHTML = todoInput.value;
        todoli.classList.add("todo-row");
        tododiv.appendChild(todoli);

        let checkbtn = document.createElement("button");
        checkbtn.innerHTML = '<i class="fas fa-check-square"></i>';
        checkbtn.classList.add("completed-btn");
        tododiv.appendChild(checkbtn);

        let delbtn = document.createElement("button");
        delbtn.innerHTML = '<i class="fas fa-trash"></i>';
        delbtn.classList.add("delete-btn");
        tododiv.appendChild(delbtn);

        inputul.appendChild(tododiv);

        todoInput.value = "";

        let colors = ["#adbeed", "#a6e3b6", "#bfa6e3", "#e3a6a6", "#faeec3"];
        var rand1 = Math.floor(Math.random()*3) + 1;
        var rand2 = Math.floor(Math.random()*3) + 1;

        for(var i = 0; i<colors.length; i++)
        {
            document.body.style.backgroundImage = 'linear-gradient(90deg, ' + colors[rand1] + ', ' + colors[rand2] + ' )';
    
        }
    }

}

function checkDelete(event)
{  
    let complete = event.target;
    console.log(complete.classList[0]);

    //clicked btn will be assigned a returned value of [0]
    if(complete.classList[0]=== "completed-btn")
    {
        let getparent = complete.parentElement;
        console.log(getparent);
        getparent.classList.toggle("completed-task");
    }

    if(complete.classList[0]==="delete-btn")
    {
        let delparent = complete.parentElement;
        console.log(delparent);
        delparent.classList.add("deleted-task");

        delparent.addEventListener("transitionend", function(){
        delparent.remove();
    })
        
    }

    
}
