
import './todolist.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import React, { useState } from 'react';
import News from '../news/News';


function Navigation() {
    return (
        <Router>
            <header>
                <button className="todo"> <Link to="/">Todo list</Link></button>
                <button className="news"><Link to="/news">News</Link></button>
            </header>
            <Switch>
                <Route path="/">
                    <Todolist/>
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
            </Switch>
        </Router>
    );
}

function ToDoListHeader(props) {
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput("");
    }

    return (
        <div className="add-task">
            <input value={userInput} type="text" onChange={handleChange} placeholder="Add an item..." />
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}

//individual rows 
function Todo(props) {
    return (
        <div className="article">
            <div className="strike-button"><input type="checkbox" onClick={() => { props.toggle(props.todo.id) }} /></div>
            <div className={props.todo.completed ? "strike" : "no-strike"}>{props.todo.article}</div>
            <div className="delete-button"><button onClick={() => { props.deleteItem(props.todo.id) }}>x</button></div>
        </div>
    )
}

//a set of rows of todos 
function DisplayToDoList(props) {


    return (
        <div>
            {props.listArray.map(todo => {
                return (
                    <Todo todo={todo} toggle={props.toggle} deleteItem={props.deleteItem} />
                )
            })}
        </div>
    );
}

function Todolist() {
    const data = [{
        id: 1,
        article: "This is an example list",
        completed: false,
    }
    ];
    const [listArray, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = listArray.map(task => {
            return task.id === id ? { ...task, completed: !task.completed } : { ...task };
        });
        setToDoList(mapped);
    };

    const deleteItem =(id)=>{
        let removed= listArray.splice(id, 1);
        setToDoList(removed);
      }

    const addTask = (userInput) => {
        let copy = [...listArray];
        copy = [...copy, { id: listArray.length + 1, article: userInput, completed: false }];
        setToDoList(copy);
    }

    return (
        <Router>
            <div className="container">
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="main-page">
                    <div className="todolist-header">
                        <ToDoListHeader addTask={addTask} />
                    </div>
                    <div className="display-list">
                        <DisplayToDoList listArray={listArray} toggle={handleToggle} deleteItem={deleteItem} />
                    </div>
                </div>
            </div>
        </Router>
    )
}


export default Todolist;