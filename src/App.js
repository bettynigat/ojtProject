import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation
} from 'react-router-dom';
import Todolist from './days/day5/componets/todolist/Todolist';
import Login from './days/day5/componets/login/Login';
import News from './days/day5/componets/news/News';

function Headers() {
  let location = useLocation();
  if (location.pathname !== '/') {
    return (
      <div className="navigation">
        <Link to="/todolist"><button className="todo"> Todo list</button></Link>
        <Link to="/news"><button className="news">News</button></Link>
      </div>
    )
  }
  else {
    return <></>
  }
}

function App() {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/news" component={News} />
      </Switch>
    </Router>
  )
}

export default App;
