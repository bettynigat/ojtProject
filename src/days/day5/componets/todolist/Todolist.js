
import './todolist.css';
import React, { useState } from 'react';

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

function Todo(props) {
    return (
        <div className="article">
            <div className="strike-button"><input type="checkbox" onClick={() => { props.toggle(props.todo.id) }} /></div>
            <div className={props.todo.completed ? "strike" : "no-strike"}>{props.todo.article}</div>
            <div className="delete-button"><button onClick={() => { props.deleteItem(props.todo.id) }}>x</button></div>
        </div>
    )
}

function DisplayToDoList(props) {
    return (
        <div>
            {props.listArray.map((todo, index) => {
                return (
                    <Todo key={index} todo={todo} toggle={props.toggle} deleteItem={props.deleteItem} />
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
        delete: false,
    }
    ];

    const [listArray, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = listArray.map(task => {
            return task.id === id ? { ...task, completed: !task.completed } : { ...task };
        });
        setToDoList(mapped);
    };

    const deleteItem = (id) => {
        let mapped = listArray.map(task => {
            return task.id === id ? { ...task, delete: true } : { ...task };
        });

        let filtered = mapped.filter(task => {
            return !task.delete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...listArray];
        copy = [...copy, { id: listArray.length + 1, article: userInput, completed: false, delete: false }];
        setToDoList(copy);
    }

    return (
        <div className="container">
            <div className="main-page">
                <div className="todolist-header">
                    <ToDoListHeader addTask={addTask} />
                </div>
                <div className="display-list">
                    <DisplayToDoList listArray={listArray} toggle={handleToggle} deleteItem={deleteItem} />
                </div>
            </div>
        </div>
    )
}

export default Todolist;