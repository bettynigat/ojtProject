import './login.css';
import {
    useHistory,
} from 'react-router-dom';
import React from 'react';

function Login() {
    let history = useHistory();

    return (
        <div className="common">
            <div className="image">
            </div>
            <div className="header1">
                <h1>Your Todo</h1>
            </div>
            <div className="input">
                <div className="user-input">
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" /><br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="login">
                    <button onClick={() => history.push("/todolist")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;