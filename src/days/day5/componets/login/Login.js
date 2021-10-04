
import './login.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from 'react-router-dom';

import Todolist from '../todolist/Todolist';
import { Component } from 'react';
function Login() {
    let history= useHistory(); 
    return (
            <div className="common">
                <div className="image">
                </div>
                <div className="header">
                    <h1>Your Todo</h1>
                </div>
                <div className="input">
                    <div className="user-input">
                    <label for="ID">ID</label>
                    <input type="text" id="ID" /><br></br>
                    <label for="PW">Password</label>
                    <input type="password" id="PW"/>
                    </div>
                    <div className="login"> 
                    <button onClick={()=>history.push("/todolist")}>Login</button>
                </div>
                </div> 
            </div>
        
    )
}
export default Login;