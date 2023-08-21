var tasks = document.querySelectorAll(".tasks");
console.log(tasks);
for(let task of tasks){
    task.addEventListener("click", ()=>{
        task.value = "Abdullah";
    })
}