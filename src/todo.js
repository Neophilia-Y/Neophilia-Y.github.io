const formContainer = document.querySelector(".js-toDoForm"),
    inputToDo = formContainer.querySelector("#myInput"),
    toDoList = document.querySelector(".toDoList");
    addBtn = document.querySelector(".addBtn");

const TODOS_LS = "toDos";
let toDos = [];

function init(){
    loadTodos();
    inputList();
}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // for(value of parsedToDos){
        //     addList(value.text);
        // }
        parsedToDos.forEach(toDo => {
            addList(toDo.text);
        });
    }
}
function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDo();
}

function handlerInput(event){
    event.preventDefault();
    const currentValue = inputToDo.value;
    console.log("handler", currentValue);
    addList(currentValue);
    inputToDo.value = ""; //input 안의 내용을 초기화
}

function inputList(){
    addBtn.addEventListener("click",handlerInput);
}

function checkedHandler(e){
    e.target.classList.toggle("checked");
}
function addList(currentValue){
    currentInput = currentValue;
    const li = document.createElement("li");
    const delBtn = document.createElement("span");
    delBtn.innerText = "\u00D7"
    delBtn.className = "close";
    delBtn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    const newId = toDos.length + 1 ;
    span.innerText = currentInput;
    li.addEventListener("click",checkedHandler);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    toDoObj = {
        text : currentInput,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDo();
}



init();