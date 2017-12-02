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
      id: props.match.params.id,
      log: {},
      error: ''
    }
  }

  componentWillMount = () => {
    apiGet(`logs/${this.state.id}`).then((data) => {
      if (data.success) {
        if (data.log === {}) {
          this.setState({error: 'No flight log by that id'});
          return;
        }
        this.setState({log: data.log})
      }
    })
  }


  render() {
    const { log, error } = this.state;
    return (
      <div>
        <Nav />
        <div className="max-width">
          <h1 className="margin-top">Flight Info</h1>
          <div>
            <b>Project Name: </b> {log.projectReference}
          </div>
          <div>
            <b>Place Name: </b> {log.placeName}
          </div>
          <div>
            <b>Personnel: </b> {log.personnel}
          </div>
          { error !== '' ? <div>{error}</div> : null }
          <h1 className="margin-top">Flight Conditions</h1>
          <div className="row">
            <div className="col-4 padding">
              <div className="card">
                <h3>Wind</h3>
                <h2>{log.wind}mph</h2>
              </div>
            </div>
            <div className="col-4 padding">
              <div className="card">
                <h3>Temperature</h3>
                <h2>{log.temperature}°F</h2>
              </div>
            </div>
            <div className="col-4 padding">
              <div className="card">
                <h3>Cloud Coverage</h3>
                <h2>{log.cloudCoverage}%</h2>
              </div>
            </div>
          </div>

          <h1 className="margin-top">Flight Data</h1>
          <div className="row">
            <div className="col-4 padding">
              <div className="card">
                <h3>Wind</h3>
                <h2>{log.wind}mph</h2>
              </div>
            </div>
            <div className="col-4 padding">
              <div className="card">
                <h3>Temperature</h3>
                <h2>{log.temperature}°F</h2>
              </div>
            </div>
            <div className="col-4 padding">
              <div className="card">
                <h3>Cloud Coverage</h3>
                <h2>{log.cloudCoverage}%</h2>
              </div>
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
