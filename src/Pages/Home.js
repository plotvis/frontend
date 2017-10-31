import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div style={{background: '#93D4CD', height: '100vh', textAlign: 'center'}}>
        <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <img src="https://avatars1.githubusercontent.com/u/33107934?s=200&v=4" alt='logo'/>
          <h1 style={{margin: '0'}}>Plotvis</h1>
          <Link to="/login"><button style={{marginTop: '12px'}}>Login</button></Link>
        </div>
      </div>
    );
  }
}

export default Home;
