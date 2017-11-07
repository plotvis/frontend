import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../UIComponents/Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div style={ { height: 'calc(100vh - 70px)', width: '100%'} }>
          <div style={ { position: 'relative', top: '50%', transform: 'translateY(-50%)', textAlign: 'center'} }>
            <h1>Drone data graphing.</h1>
            <Link to="/register"><button style={{marginRight: '6px', width: '165px'}}>Get Started</button></Link>
            <Link to="/documentation"><button style={{marginLeft: '6px', width: '165px'}}>Documentation</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
