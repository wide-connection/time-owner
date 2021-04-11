import React, {useState} from "react";
import axios from "axios";

function CreateTask(){

    const [input, setInput] = useState({
        title: '',
        Category: ''
    })
    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newTask = {
            title:input.title,
            Category:input.Category
        }

        axios.post('http://localhost:3001/addTask',newTask)
    }

    return <div className='container'>
        <h1>Create Task</h1>
        <from>
            <div className='form-group'>
                <input onChange={handleChange} name ="title" value={input.title} autoComplete="off" className="form-control" placeholder="task title"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name ="Category" value={input.Category} autoComplete="off" className="form-control" placeholder="task Category"></input>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">ADD TASK</button>
        </from>
    </div>
}

export default CreateTask;