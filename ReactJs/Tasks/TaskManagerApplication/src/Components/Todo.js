import React, { useEffect, useRef, useState } from 'react'
export default function Todo() {
  let taskTitle = useRef(0);
  let taskDescription = useRef(0);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  // Add Task Function
  const addTask = () => {
    if (taskTitle.current.value === "") {
      document.getElementById("modalButton1").click();
    }
    else {
      const task = {
        title: taskTitle.current.value,
        description: taskDescription.current.value
      }
      let newTodoTask = [...todoTasks];
      newTodoTask.unshift(task);
      localStorage.setItem('todoTasks', JSON.stringify(newTodoTask))
      setTodoTasks(newTodoTask);
      taskTitle.current.value = ""
      taskDescription.current.value = ""
      document.getElementById("modalButton").click();
    }
  }

  // Completed Task Function
  const completedTask = (index) => {
    let newTodoTask = [...todoTasks];
    let newCompleteTasks = [...completeTasks]
    newCompleteTasks.unshift(newTodoTask.splice(index, 1));
    localStorage.setItem('todoTasks', JSON.stringify(newTodoTask))
    localStorage.setItem('completedTasks', JSON.stringify(newCompleteTasks))
    setTodoTasks(newTodoTask);
    setCompleteTasks(newCompleteTasks);
    removeTask(index);
  }

  // Edit Task Function
  const editTask = (index)=>{
    let newTodoTasks = [...todoTasks];
    let oldTitle = newTodoTasks[index].title, oldDescription = newTodoTasks[index].description;
    let newTitle="", newDescription = "";
    newTitle = prompt("Enter New Title");
    newDescription = prompt("Enter New Description");
    newTitle = newTitle ? newTitle:oldTitle ;
    newDescription = newDescription ? newDescription:oldDescription ;
    newTodoTasks[index].title = newTitle;
    newTodoTasks[index].description = newDescription;
    localStorage.setItem('todoTasks', JSON.stringify(newTodoTasks))
    setTodoTasks(newTodoTasks);
  }

  // Remove Task Function
  const removeTask = (index) => {
    let newTodoTask = [...todoTasks];
    newTodoTask.splice(index, 1);
    localStorage.setItem('todoTasks', JSON.stringify(newTodoTask))
    setTodoTasks(newTodoTask);
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todoTasks'));
    if (savedTodo) {
      setTodoTasks(savedTodo)
    }
    let savedCompleted = JSON.parse(localStorage.getItem('completedTasks'));
    if (savedCompleted) {
      setCompleteTasks(savedCompleted);
    }
  }, [])

  return (

    <div>
      <h2 className='display-1 py-3 px-2 text text-center'>Todo</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-4 mx-auto">
            <div className="form-floating my-2">
              <input ref={taskTitle} type="text" className="form-control" id="TaskTitle" placeholder="Task Title" />
              <label htmlFor="TaskTitle">Task Title</label>
            </div>
            <div className="form-floating my-2">
              <input ref={taskDescription} type="text" className="form-control" id="TaskDescription" placeholder="Task Description" />
              <label htmlFor="TextDescription">Task Description</label>
            </div>
            <button className='btn btn-outline-primary w-50 d-block mx-auto' onClick={addTask}>Submit</button>
            {/* Box Modal (Successful) */}
            <button type="button" id="modalButton" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5 h1" id="exampleModalLabel">Task Added</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>Task has been added successfully</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Modal (Wrong) */}
            <button type="button" id="modalButton1" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1"></button>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5 h1" id="exampleModalLabel">Enter Task Title</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>Task Title cannot be empty. Enter valid Task Title</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          {
            todoTasks.map((task, index) => {
              return <div className="card col-10 col-md-3 m-2 p-2">
                <div className="card-body text text-center">
                  <h5 className="card-title bg-white border border-0 d-block mx-auto">{task.title}</h5>
                  <p className="card-text bg-white border border-0 d-block mx-auto">{task.description}</p>
                  <hr className='primary border-2 border-primary opacity-100' />
                  <button className="btn" onClick={() => completedTask(index)}><i className="bi bi-check-square"></i></button>
                  <button className="btn" onClick={()=> editTask(index)}><i className="bi bi-pencil-square"></i></button>
                  <button className="btn" onClick={() => removeTask(index)}><i className="bi bi-x-square"></i></button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
