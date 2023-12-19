var task = document.getElementById("task");
var button = document.getElementById("btn");
var tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

var del = ()=>{
    document.querySelectorAll(".remove").forEach((d,i)=>{
        d.addEventListener("click",()=>{
            tasks.splice(i,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            location.reload();
        })
    })
}

var edit = ()=>{
    let updateBtn = document.querySelectorAll(".updater");
    let taskBox = document.querySelectorAll(".inputSetter textarea");
    document.querySelectorAll(".edit").forEach((e,i)=>{
        e.addEventListener("click",()=>{
            updateBtn[i].style.display = "inline-block";
            taskBox[i].disabled = false
        })
    })
}

var save = ()=>{
    let taskBox = document.querySelectorAll(".inputSetter textarea");
    document.querySelectorAll(".save").forEach((s,i)=>{
        s.addEventListener("click",()=>{
            tasks[i] = taskBox[i].value;
            localStorage.setItem("tasks",JSON.stringify(tasks));
            location.reload();
        })
    })
}

var cancel = ()=>{
    document.querySelectorAll(".cancel").forEach((c)=>{
        c.addEventListener("click",()=>{
            location.reload();
        })
    })
}

var display = ()=>{
    let list = "";
    for(let i =0 ; i<tasks.length;i++){
        list += `<section class="item">
                    <section class="inputSetter">
                        <textarea disabled>${tasks[i]}</textarea>
                        <section class="editBtns">
                            <button class="remove">Remove</button>
                            <button class="edit">Edit</button>
                        </section>
                    </section>
                    <section class="updater">
                        <button class="save">Save</button>
                        <button class="cancel">Cancel</button>
                    </section>
                </section>`
    }
    document.querySelector(".tasks-box").innerHTML = list;
}

button.addEventListener("click",()=>{
    tasks.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    task.value = "";
    location.reload();
});

window.addEventListener("load",()=>{
    display();
    del();
    edit();
    save();
    cancel();
})