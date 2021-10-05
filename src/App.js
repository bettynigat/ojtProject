import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Todolist from './days/day5/componets/todolist/Todolist';
import Login from './days/day5/componets/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/news" component={Todolist} />
      </Switch>
    </Router>
  )
}

export default App;
