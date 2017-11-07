import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import { destroyUser } from '../Functions/UserManagement';
import { apiGet } from '../Functions/api';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [{success: true}],
      labels: [],
      wind: {},
      temperature: {},
      cloudCoverage: {},
      avData: []
    }
  }

  componentWillMount = () => {
    apiGet('logs').then((data) => {
      this.setState({ flights: data.logs, avData: Object.keys(data.logs[0]) })
      const temp = {
        label: 'Temperature (°F)',
        backgroundColor: 'RGBA(45, 219, 255, .4)'
      }
      data = data.logs;
      temp.data = data.map((flight) => {
        return flight.temperature;
      });

      const wind = {
        label: 'Wind (MPH)',
        backgroundColor: 'RGBA(87, 121, 235, 0.4)',
      };
      wind.data = data.map((flight) => {
        return flight.wind;
      });

      const cc = {
        label: 'Cloud Coverage (%)',
        backgroundColor: 'RGBA(53, 210, 37, 0.4)',
      };
      cc.data = data.map((flight) => {
        return flight.cloudCoverage;
      });

      const labels = data.map((flight) => {
        let date = new Date(flight.flightDate);
        return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      });

      this.setState({labels: labels, wind: wind, temperature: temp, cloudCoverage: cc});
    });
  }

  logout = () => {
    destroyUser();
    this.context.router.history.push('/login');
  }
  render() {
    const { labels, wind, temperature, avData, cloudCoverage } = this.state;

    const data = {
      labels: labels,
      datasets: [ wind, temperature, cloudCoverage ]
    }

    return (
      <div>
        <Nav />
        <div className="max-width" style={ {paddingTop: '40px'} }>
          {labels.length !== 0 ?
            <div>
              <Line data={data} height={100}/>
              <div>
                <b>Avalible Labels to Graph</b>
                {
                  avData.map((category) => {
                    let _label = null;
                    category === '_id' || category === 'user' || category === '__v' ?
                    null :
                    _label = (<div key={category}>{category}</div>)

                    return _label
                  })
                }
              </div>
            </div>
          :
            <div style={ { textAlign: 'center' } }>
              <h1>No flight logs.</h1>
              <Link to="upload"><button>Upload CSV</button></Link>
            </div>
          }

        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

export default Dashboard;
