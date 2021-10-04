
import './todolist.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import React , {useState} from 'react';

//individual todo list components 

function Navigation(){
    return (
        <header>
            <button className="todo">Todo List</button>
            <button className="news">News</button>
        </header>
    );
}

function ToDoListHeader(props){

    const [ userInput, setUserInput ] = useState('');

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
            <input value={userInput} type="text" onChange={handleChange} placeholder="Add an item..."/>
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}

//individual rows 
function Todo(props){
    return(
        <div className="article">
            <div className="strike-button"><input type="checkbox" onClick={()=>{props.toggle(props.todo.id)}} /></div>
            <div className={props.todo.completed ? "strike" : "no-strike"}>{props.todo.article}</div>
            <div className="delete-button"><button onClick={()=>{props.deleteItem(props.todo.id)}}>x</button></div>
        </div>
    )
}

//a set of rows of todos 
function DisplayToDoList(props){
    return (
        <div>
            {props.listArray.map(todo=>{
                return(
                    <Todo todo={todo} toggle= {props.toggle} deleteItem={props.deleteItem}/>
                )
            })}
        </div>
    );
}

function Form(){
    

}






function Todolist(){
    const data= [{
        id: 1, 
        article: "This is an example list",
        completed: false,
    } 
    ];

    const[listArray, setToDoList]= useState(data);

    const handleToggle = (id) => {
        let mapped = listArray.map(task => {
          return task.id == id ? { ...task, completed: !task.completed } : { ...task};
        });
        setToDoList(mapped);
      }; 

      const deleteItem = (id) => {
        let mapped = listArray.map(task => {
          return task.id == id ? delete listArray[id-1] : { ...task};
        });
        setToDoList(mapped);
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
                    <Navigation/>
                </div>
                <div className="main-page">
                    <div className= "todolist-header">
                        <ToDoListHeader addTask={addTask}/>
                    </div>
                    <div className= "display-list">
                        <DisplayToDoList listArray={listArray} toggle= {handleToggle} deleteItem={deleteItem}/>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Todolist;