const textField = document.getElementById('textfield');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('.row button');

function addTask(){
    if(textField.value === ''){
        alert("First write some Task. Duh!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    textField.value='';
    saveTask();
}


listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})

function saveTask(){
    localStorage.setItem("Tasks", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Tasks")
}

showTask();