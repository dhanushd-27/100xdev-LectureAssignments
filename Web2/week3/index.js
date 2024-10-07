let counter = 1;

function addTodo(event){
    event.preventDefault();
    
    todoContainer = document.getElementById("list");

    // Create Elements
    divEle = document.createElement("div");
    deleteButt = document.createElement("button");

    divEle.setAttribute("id", "todo-" + counter);
    deleteButt.setAttribute("onclick", "deleteTodo( " + counter + ")");

    todo = document.getElementById("inp");

    if(!todo.value){
        alert("Input shouldn't be empty");
        return;
    }

    pEle = document.createElement("p");

    pEle.textContent = counter + " " + todo.value;
    deleteButt.textContent = "delete";

    divEle.appendChild(pEle);
    divEle.appendChild(deleteButt);
    todoContainer.appendChild(divEle);

    todo.value = "";
    counter++;
}

function deleteTodo(index){
    const element = document.getElementById("todo-" + index);

    if (element) {
        element.parentNode.removeChild(element);
    }
    counter--;
}