import React, { useState, useEffect } from 'react'

export default function Completed() {
  const [completeTasks, setCompleteTasks] = useState([]);


  // Remove Task Function
  const removeTask = (index) => {
    let newCompletedTask = [...completeTasks];
    newCompletedTask.splice(index, 1);
    localStorage.setItem('completedTasks', JSON.stringify(newCompletedTask))
    setCompleteTasks(newCompletedTask);
  }

  useEffect(() => {
    let savedCompleted = JSON.parse(localStorage.getItem('completedTasks'));
    if (savedCompleted) {
      setCompleteTasks(savedCompleted);
    }
  }, [])
  return (
    <div>
      <h2 className='display-1 py-3 px-2 text text-center'>Completed</h2>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          {
            completeTasks.map((t, i) => {
              return <div className="card col-10 col-md-3 m-2 p-2" key={i}>
                {console.log(t.title)}
                {console.log(t.description)}
                <div className="card-body text text-center">
                  <h5 className="card-title bg-white border border-0 d-block mx-auto">{t[0].title}</h5>
                  <p className="card-text bg-white border border-0 d-block mx-auto">{t[0].description}</p>
                  <hr className='primary border-2 border-primary opacity-100' />
                  <button className="btn" onClick={() => removeTask(i)}><i className="bi bi-x-square"></i></button>
                </div>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}
