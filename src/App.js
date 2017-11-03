import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Public/App.css';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotAuthenticatedRoute from './NotAuthenticatedRoute';

import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Dashboard from './Pages/Dashboard';
import Upload from './Pages/Upload';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <div className="content">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />

            <NotAuthenticatedRoute authed={true} path="/login" component={ Login } />
            <NotAuthenticatedRoute authed={true} path="/register" component={ Register } />


            <AuthenticatedRoute authed={true} path='/dashboard' component={ Dashboard } />
            <AuthenticatedRoute authed={true} path='/upload' component={ Upload } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
