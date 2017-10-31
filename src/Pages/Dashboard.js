import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import { destroyUser } from '../Functions/UserManagement';

class Dashboard extends Component {
  logout = () => {
    destroyUser();
    this.context.router.history.push('/login');
  }
  render() {
    return (
      <div>
        <Nav />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

export default Dashboard;
