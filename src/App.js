import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, withRouter, Redirect } from 'react-router-dom';
import './Public/App.css';
import { isAuthenticated } from './UserManagement';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotAuthenticatedRoute from './NotAuthenticatedRoute';

import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Dashboard from './Pages/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <div className="content">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />

            <NotAuthenticatedRoute authed={ isAuthenticated() } path="/login" component={ Login } />
            <NotAuthenticatedRoute authed={ isAuthenticated() } path="/register" component={ Register } />


            <AuthenticatedRoute authed={ isAuthenticated() } path='/dashboard' component={ Dashboard } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
