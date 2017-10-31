import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from '../UIComponents/Nav';
import '../Public/Login.css';
import { apiPost } from '../Functions/api';
import { createUser, getToken } from '../Functions/UserManagement';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      apiError: ''
    }
  }

  updateEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  login = () => {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }

    apiPost('auth/login', credentials).then((data) => {
      if (data.success) {
        createUser(data.token)
        console.log(getToken());
        this.context.router.history.push('/dashboard');
      } else {
        this.setState({ apiError: data.message })
      }
    });
  }

  render() {
    const { apiError } = this.state;
    return (
      <div>
        <Nav />
        <div className="flex login-wrapper">
          <div className="center">
            <h1 className="text-center">Login</h1>
            <div className="card" style={{width: '400px'}}>
              <h3>Email</h3>
              <input type="email" style={{margin: '12px 0'}} onChange={this.updateEmail} />
              <h3>Password</h3>
              <input type="password" style={{margin: '12px 0'}} onChange={this.updatePassword} />
              <div>
                <button onClick={this.login}>Login</button>
                <Link to='/register'><button style={{marginLeft: '8px'}} className="neutral">Register</button></Link>
              </div>
              <div style={{marginTop: '12px'}}>{ apiError }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}



export default Login;
