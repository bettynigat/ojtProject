
import './news.css'

import React, { useState } from 'react';
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
    closeModal();
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
  const [titleInput, setTitleInput] = useState(props.todo.title);
  const [articleInput, setArticleInput] = useState(props.todo.article);

  const showModal = (item) => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false)
  };

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
    closeModal();
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
        <h1>Edit the News</h1>
        <div className="modal-inputs">
          Title: <input type="text" id="user-title" value={titleInput} onChange={handleTitleChange} />
          Article: <input type="text" value={articleInput} onChange={handleArticleChange}  />
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
      {props.listArrays.map((todo, index) => {
        return (
          <NewsItem key={index} todo={todo} modifyTask={props.modifyTask} deleteItem={props.deleteItem}/>
        )
      })}
    </div>
  );
}

function News() {
  const data = [{
    id: 1,
    article: "Although Lu says that the reliability of both the software and the hardware still needs to be increased, TuSimple is planning its first fully autonomous tests, without a human safety driver in the cabin at all, before the end of the year. The results of such tests will indicate whether the company can meet its goal to launch its own trucks by 2024. Lu says that 7,000 have been reserved in the US alone.",
    title: "Self-driving truck makes delivery 10 hours faster than a human",
    delete: false, 
  }, {
    id: 2,
    article: "To get a booster or not? The US Food and Drug Administration and US Centers for Disease Control and Prevention have issued guidance that some adults can receive a third shot of the Pfizer/BioNTech Covid-19 vaccine, so it's time to ask that question.There are so many questions: Who exactly is eligible to get the booster? If you are eligible, should you rush to get inoculated? What should you consider in your decision-making process? And what about those who got the Moderna or Johnson & Johnson vaccines -- can they get a booster too?",
    title: "Should you get a Covid-19 booster now? An expert weighs in",
    delete: false,
  }
  ];
  const [listArrays, setToDoList] = useState(data);

  const addTask = (titleInput, articleInput) => {
    let copy = [...listArrays];
    copy = [...copy, { id: listArrays.length + 1, article: articleInput, title: titleInput, delete: false, }];
    setToDoList(copy);
  }

  const modifyTask = (titleInput, articleInput, id) => {
    let mapped = listArrays.map(news => {
      return news.id === id ? { ...news, article: articleInput, title: titleInput } : { ...news };
        });
    setToDoList(mapped);
    }

    const deleteItem = (id) => {
      let mapped = listArrays.map(task => {
        return task.id === id ? { ...task, delete: true } : { ...task };
    });
    
    let filtered= mapped.filter(task=>{
        return !task.delete; 
    });
    setToDoList(filtered);
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