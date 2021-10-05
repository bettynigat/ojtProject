
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
    props.modifyTask(titleInput, articleInput,props.todo.id);
    setTitleInput("");
    setArticleInput("");
  }

  return (
    <div className="news-section">
      <div className="header">
        <div className="title">
          {props.todo.title}
        </div>
        <div className="modifier">
          <span><button onClick={() => { showModal() }} className="edit">Modify</button></span>
          <span ><button onClick={() => { props.deleteItem(props.todo.id) }} className="delete">delete</button></span>
        </div>
      </div>
      <div className="articles">
        <p>{props.todo.article}</p>
      </div>
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

function DisplayNews(props) {
  return (
    <div>
      {props.listArrays.map(todo => {
        return (
          <NewsItem todo={todo} modifyTask={props.modifyTask} deleteItem={props.deleteItem}/>
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

  const modifyTask = (titleInput, articleInput, id) => {
    let mapped = listArrays.map(news => {
      return news.id === id ? { ...news, article: articleInput, title: titleInput } : { ...news };
        });
    setToDoList(mapped);
    }

    const deleteItem = (id) => {
      let removed = listArrays.splice(id, 1);
      setToDoList(removed);
  }

  return (
    <div className="containers">
      <div className="main-pages">
        <div className="news-header">
          <NewsHeader addTask={addTask} />
        </div>
        <div className="display-lists">
          <DisplayNews listArrays={listArrays} modifyTask={modifyTask} deleteItem={deleteItem}/>
        </div>
      </div>
    </div>
  )
}

export default News;