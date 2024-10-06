function addTodo(e){
    e.preventDefault();

    const list = document.body.querySelector("#list");

    const todo = document.body.getElementsByTagName("input");

    const liEle = document.createElement("li");
    liEle.textContent = todo[0].value;

    list.appendChild(liEle);
}