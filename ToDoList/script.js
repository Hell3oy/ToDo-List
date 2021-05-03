var task_input = document.getElementById("task_input");
var task_button = document.getElementById("task_button");
var output = document.getElementById("output");

var todo_input = [];
task_button.addEventListener("click",
function(defaults){
    defaults.preventDefault();
    todo_input.push(task_input.value);
    console.log("todo", todo_input);
    task_input.value = "";
    renderList();
})

function delete_function(index){
    var deletes = [];
    for(let i = 0; i < todo_input.length; i++){
        if(i !== index){
            deletes.push(todo_input[i]);
        }
    }
    todo_input = deletes;
    renderList();
}

function edit_function(index){
    task_input.value = todo_input[index];
    delete_function(index);
}

function renderList(){
    let res = "";
    for(let i = 0; i < todo_input.length; i++){
    var single = todo_input[i];
    var html = 
    `<center>
    <div class="singleTodo">
        <div class="todoTitle">
            ${single}
        </div>
        
        <div class="buttons">
            <button class="btn1-css" onClick={edit_function(${i})}>Edit</button>
            <button class="btn2-css"onClick={delete_function(${i})}>Delete</button>
        </div>
    </div>
    </center>
    `
    ;
    res += html;
    }
    console.log("res=",res);
    output.innerHTML=res;
}