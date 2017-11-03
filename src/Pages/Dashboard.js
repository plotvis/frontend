import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import { destroyUser } from '../Functions/UserManagement';
import { apiGet } from '../Functions/api';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [{success: true}]
    }
  }

  componentWillMount = () => {
    apiGet('logs').then((data) => {
      this.setState({ flights: data.logs })
    });
  }

  logout = () => {
    destroyUser();
    this.context.router.history.push('/login');
  }
  render() {
    const { flights } = this.state;
    return (
      <div>
        <Nav />
        <div className="max-width">
          { flights.map((flight) => {
            return (
              <div style={{'marginTop': '12px'}}>
                {Object.keys(flight).map((key) => {
                  return <div>{key}: {flight[key].toString()}</div>
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

export default Dashboard;
