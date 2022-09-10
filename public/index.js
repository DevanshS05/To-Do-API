let tasks = [];

async function fetchPosts(){
    const response = await fetch('http://localhost:5000/api',{method:'GET'})
    .then((response)=>response.json())
    .then((data)=>console.log(data.quote))
}

function deletePost(){}

//for future updates
function updatePost(){}


function getPosts(){
    let allTasks = "";
    tasks.forEach((value)=>{
        let tempTask = `<div class="taskBox rounded-lg" id="task${value.taskID}">
        <span style="margin-right:10px">${value.taskID}</span>
        <span class="hover:text-zinc-700 font-semibold" id="${value.taskID}text" >${value.taskName}</span>
        <button class="bg-red-700 float-right deleteBox" id="${value.taskID}delete" style=""></button>
        </div>
        <br>`
        allTasks+=tempTask;
    })
    document.getElementById('task-List').innerHTML = allTasks;

    //Adding a event listener for the above tasks
    tasks.forEach((value)=>{
        let tID = value.taskID;
        document.getElementById(`${tID}delete`).addEventListener("click",()=>{
            tasks.shift(tID,1); //Removing this task from the list
            document.getElementById(`${tID}delete`).removeEventListener("click",()=>console.log("Event listener removed"));
            document.getElementById(`${tID}text`).removeEventListener("click",()=>console.log("Event listener removed"));
            getPosts();
        })
        document.getElementById(`${tID}text`).addEventListener("click",()=>{
            let s = document.getElementById(`${tID}text`).style.textDecoration;
            if(s==='line-through'){
                document.getElementById(`${tID}text`).style.textDecoration = 'none';
            }
            else{
                document.getElementById(`${tID}text`).style.textDecoration = 'line-through';
            }
        })
    })
    
}



//Attaching the event listener for the submit button
document.getElementById('submit-task').addEventListener("click",()=>{
    //console.log("The submit button is clicked!");
    let taskName = document.getElementById('taskDetails').value;
    if(taskName===""){
        console.log("Please add a valid task");
        document.getElementById('message-box').innerHTML = `<h2 style="color:#991b1b">Please enter a valid task</h2>`;
    }
    else{
        document.getElementById('message-box').innerHTML = `<h2 style="color:#3f6212">Task added to the list successfully</h2>`;
        //Add the task to the tasks lists
        document.getElementById('taskDetails').value = "";
        tasks[tasks.length] = {
            taskID : tasks.length+1,
            taskName : taskName,
            taskDone : false
        }
        //Repopulate the tasks-list
        getPosts();
    }
})



//This sections runs as soon as the page is loaded
console.log("This page has been loaded!");
getPosts();
