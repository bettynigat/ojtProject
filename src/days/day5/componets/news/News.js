
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


    
class NewsHeader extends React.Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };

  handleAfterOpen= ()=>{

  }

  render(){
  return (
    <div className="add-news">
      <button onClick={e => {this.showModal();}}>Add News</button>
      <Modal isOpen={this.state.show} onAfterOpen={this.handleAfterOpen} className="Modal">
        <h1>Add News</h1>
        Title: <input type="text" />
        Article: <input type="text"/>
      </Modal>
    </div>
  )
  }
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

  return (
    <div className="containers">
      <div className="main-pages">
        <div className="news-header">
          <NewsHeader />
        </div>
        <div className="display-lists">
          <DisplayNews listArrays={listArrays} />
        </div>
      </div>
    </div>
  )
}

export default News;