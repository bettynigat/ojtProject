
import './login.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

function Login() {
    return (
        <Router>
            <div className="common">
                <div className="image">
                </div>
                <div className="header">
                    <h1>Your Todo</h1>
                </div>
                <div className="input">
                    <label for="ID">ID</label>
                    <input type="text" id="ID" /><br></br>
                    <label for="PW">Password</label>
                    <input type="password" id="PW"/>
                </div>
                <div className="login"> 
                    <button>Log in </button>
                </div> 
            </div>
        </Router>
    )
}
export default Login;