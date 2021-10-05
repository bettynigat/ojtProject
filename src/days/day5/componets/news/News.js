
import './news.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function NewsHeader(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="add-news">
            <button variant="primary" onClick={handleShow}>Add News</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button variant="primary" onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
        </Modal>
    </div> 
    )
}

function NewsItem(props) {
    return (
        <div className="news-section">
            <div className="header">
                <div className="title">
                    {props.todo.title}
                </div>
                <div className="modifier">
                    <span><button className="edit">Modify</button></span>
                    <span ><button className="delete">delete</button></span>
                </div>
            </div>
            <div className="articles">
                <p>{props.todo.article}</p>
            </div>
        </div>
    )
}

function DisplayNews(props) {
    return (
        <div>
            {props.listArray.map(todo => {
                return (
                    <NewsItem todo={todo} />
                )
            })}
        </div>
    );
}

function News(){
    const data = [{
        id: 1,
        article: "Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. ",
        title: "War in Twin countries",
    }, {
        id: 2,
        article: "Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. Recently there has been a war in the so-called twin countries. ",
        title: "Peace in Twin countries",
    }
    ];
    const [listArray, setToDoList] = useState(data);

    return (
        <div className="container">
            <div className="main-page">
                <div className="todolist-header">
                    <NewsHeader/>
                </div>
                <div className="display-list">
                    <DisplayNews listArray={listArray}/>
                </div>
            </div>
        </div>
    )
}

export default News; 