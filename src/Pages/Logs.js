import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import Log from '../UIComponents/Log';
import '../Public/Login.css';
import { apiGet } from '../Functions/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    }
  }

  componentWillMount = () => {
    apiGet('logs/all').then((data) => {
      this.setState({logs: data.logs})
    })
  }


  render() {
    const { logs } = this.state;

    return (
      <div>
        <Nav />
        <div className="max-width">
          <h1 className="margin-top">Flight Logs</h1>
          <div className='table'>
            <div className='thead row'>
              <div className='col-4'>Date</div>
              <div className='col-4'>Project</div>
              <div className='col-4'>Location</div>
            </div>
            <div className="tbody">
              { logs.map(function(log) {
                return (<Log log={log} key={log._id}/>)
              }) }              
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
