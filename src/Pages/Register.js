import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../UIComponents/Nav';
import '../Public/Login.css';
import { apiPost } from '../Functions/api';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }

  updateFirstName = (e) => {
    this.setState({ firstName: e.target.value })
  }
  updateLastName = (e) => {
    this.setState({ lastName: e.target.value })
  }
  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  updatePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  updateConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value })
  }

  register = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: 'Passwords dont match' });
      return;
    }

    const credentials = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    console.log(credentials);

    apiPost('auth/signup', credentials).then((data) => {
      console.log(data);
      if (data.success) {
        this.context.router.history.push('/login');
      } else {
        this.setState({ error: data.message })
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
            <h1 className="text-center">Register</h1>
            <div className="card" style={{width: '400px'}}>
              <h3>First Name</h3>
              <input type="text" style={{margin: '12px 0'}} onChange={this.updateFirstName} />
              <h3>Last Name</h3>
              <input type="text" style={{margin: '12px 0'}} onChange={this.updateLastName} />
              <h3>Email</h3>
              <input type="email" style={{margin: '12px 0'}} onChange={this.updateEmail} />
              <h3>Password</h3>
              <input type="password" style={{margin: '12px 0'}} onChange={this.updatePassword} />
              <h3>Confirm Password</h3>
              <input type="password" style={{margin: '12px 0'}} onChange={this.updateConfirmPassword} />
              <div>
                <button onClick={this.register}>Register</button>
                <Link to='/login'><button style={{marginLeft: '8px'}} className="neutral">Login</button></Link>
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

export default Register;
