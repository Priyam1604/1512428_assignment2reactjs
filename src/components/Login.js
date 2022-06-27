import React, {useState} from 'react';
import axios from "axios";

function Login(props) {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const usernameHandler= (event)=> {
        setUsername(event.target.value)
    }

    const passwordHandler= (event)=> {
        setPassword(event.target.value)
    }

    const login = () => {
        axios.post('http://127.0.0.1:8000/auth/',{
            username: username,
            password: password
        })
            .then(function ( response){

                console.log(response.data.token);
                localStorage.setItem("Token", response.data.token);
            })
            .catch(function (error){
                console.log(error);
            })

    }
    return (
        <div>
            <input onChange={usernameHandler} type={"text"} placeholder={"Enter Username"}/><br/>
            <input onChange={passwordHandler} type={"password"} placeholder={"Enter Password"}/><br/>
            <button onClick={login}> Login</button>
        </div>
    );
}

export default Login;