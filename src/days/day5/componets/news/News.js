
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

  const showModal = () => {
    setShow(true)
  };

  const closeModal = () => {
    setShow(false)
  };

  const [titleInput, setTitleInput] = useState('');
  const [articleInput, setArticleInput] = useState('');

  const handleTitleChange = (e) => {
    setTitleInput(e.currentTarget.value)
  }

  const handleArticleChange = (e) => {
    setArticleInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(titleInput, articleInput);
    setTitleInput("");
    setArticleInput("");
  }

  return (
    <div className="add-news">
      <button onClick={() => { showModal() }}>Add News</button>
      <Modal isOpen={show} className="Modal">
        <h1>Add News</h1>
        <div className="modal-inputs">
          Title: <input type="text" value={titleInput} onChange={handleTitleChange} placeholder="Add an title..." />
          Article: <input type="text" value={articleInput} onChange={handleArticleChange} placeholder="Add an article..." />
        </div>
        <div className="close">
          <button onClick={() => { closeModal() }}>Close</button>
          <button onClick={handleSubmit}>Save Changes</button>
        </div>

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
      {props.listArrays.map(todo => {
        return (
          <NewsItem todo={todo} />
        )
      })}
    </div>
  );
}

function News() {
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
  const [listArrays, setToDoList] = useState(data);

  const addTask = (titleInput, articleInput) => {
    let copy = [...listArrays];
    copy = [...copy, { id: listArrays.length + 1, article: articleInput, title: titleInput }];
    setToDoList(copy);
  }

  return (
    <div className="containers">
      <div className="main-pages">
        <div className="news-header">
          <NewsHeader addTask={addTask} />
        </div>
        <div className="display-lists">
          <DisplayNews listArrays={listArrays} />
        </div>
      </div>
    </div>
  )
}

export default News;