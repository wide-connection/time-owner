import React, {useEffect, useState} from "react";

function Tasks(){
    const [tasks, setTasks] = useState([{
        title: '',
        Category: ''
    }])

    useEffect(() => {
        fetch("/taskList").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setTasks(jsonRes))
    })

    return <div className='container'>
        <h1>Task List</h1>
        {tasks.map(task =>
        <div>
        <h2>{task.title}</h2>
        <h2>{task.Category}</h2>
        </div>
        )}
    </div>
}

export default Tasks;