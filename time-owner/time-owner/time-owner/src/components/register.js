import React, {useState} from "react";
import axios from "axios";

function CreateUser(){

    const [input, setInput] = useState({
        userName: '',
        password: '',
        email: ''
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

        if(input.password==input.password2){
            const newUser = {
                userName:input.userName,
                password:input.password,
                email:input.email
            }
    
            axios.post('http://localhost:3001/register',newUser);
        }else{
            console.log("password did not same!")
        }
        
        
    }

    return <div className='container'>
        <h1>Register</h1>
        <from>
            <div className='form-group'>
                <input onChange={handleChange} name ="userName" value={input.userName} autoComplete="off" className="form-control" placeholder="userName"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name ="password" value={input.password} autoComplete="off" type="password" className="form-control" placeholder="password"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name ="password2" value={input.password2} autoComplete="off" type="password" className="form-control" placeholder="password again"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name ="email" value={input.email} type="email" autoComplete="off" className="form-control" placeholder="email"></input>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Submit</button>
        </from>
    </div>
}

export default CreateUser;