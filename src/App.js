import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/detail/:id" >
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
