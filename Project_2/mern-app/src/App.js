import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TodosList from './components/TodosList'
import EditTodo from './components/EditTodo'
import CreateTodo from './components/CreateTodo'
import logo from './logo.svg'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a href="https://google.com" className="navbar-brand">
                <img src={logo} width="30" height="30" alt=""/>
              </a>
              <Link to="/" className="navbar-brand">MERN Stack TODO App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
            </nav>


            <Route exact path="/" component={TodosList}/>
            <Route path="/edit/:id" component={EditTodo}/>
            <Route path="/create" component={CreateTodo}/>
          </div>
      </Router>
      
    );
  }
}

export default App;
