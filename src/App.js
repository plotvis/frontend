import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Public/App.css';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotAuthenticatedRoute from './NotAuthenticatedRoute';

import Home from './Pages/Home';
import Documentation from './Pages/Documentation';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Dashboard from './Pages/Dashboard';
import Upload from './Pages/Upload';
import Logs from './Pages/Logs';
import Log from './Pages/Log';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <div className="content">
            <Route exact path="/" component={ Home } />
            <Route path="/documentation" component={ Documentation } />

            <NotAuthenticatedRoute authed={true} path="/login" component={ Login } />
            <NotAuthenticatedRoute authed={true} path="/register" component={ Register } />


            <AuthenticatedRoute authed={true} path='/dashboard' component={ Dashboard } />
            <AuthenticatedRoute authed={true} path='/upload' component={ Upload } />
            <AuthenticatedRoute authed={true} path='/logs' component={ Logs } />
            <AuthenticatedRoute authed={true} path='/log/:id' component={ Log } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
