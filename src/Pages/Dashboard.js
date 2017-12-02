import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import { destroyUser } from '../Functions/UserManagement';
import { apiGet } from '../Functions/api';
import Graph from '../UIComponents/Graph';
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
      avData: [],
      places: [],
      projects: [],
      place: '',
      project: ''
    }
  }

  getLogs = (place, project) => {
    apiGet(`logs?placeName=${place}&projectReference=${project}`).then((data) => {
      if (data.logs.length === 0) {
        this.setState({flights: [], labels: []});
        return;
      }
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

  componentWillMount = () => {
    let place = '';
    let project = '';
    apiGet('graphData/uniques?placeName&projectReference').then((data) => {
      const uni = data.uniques;
      console.log(uni);
      if (data.success && uni.placeName.length > 0 && uni.projectReference.length > 0) {
        place = uni.placeName[0];
        project = uni.projectReference[0];
        this.setState({places: uni.placeName, place: place, projects: uni.projectReference, project: project})
        this.getLogs(place, project);
      }
    });
  }

  logout = () => {
    destroyUser();
    this.context.router.history.push('/login');
  }

  changePlace = (e) => {
    this.setState({place: e.target.value});
    this.getLogs(e.target.value, this.state.project);
  }
  changeProject = (e) => {
    this.setState({project: e.target.value});
    this.getLogs(this.state.place, e.target.value);
  }



  render() {
    const { labels, wind, temperature, avData, cloudCoverage, places, projects, place, project } = this.state;

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
              <Graph data={data}/>
              <select onChange={this.changePlace} value={place}>
                { places.map(function(place) {
                  return (<option key={place}>{place}</option>)
                })}
              </select>
              <select onChange={this.changeProject} value={project}>
                { projects.map(function(project) {
                  return (<option key={project}>{project}</option>)
                })}
              </select>
            </div>
          :
            <div style={ { textAlign: 'center' } }>
              <h1>No flight logs.</h1>
              <select onChange={this.changePlace} value={place}>
                { places.map(function(place) {
                  return (<option key={place}>{place}</option>)
                })}
              </select>
              <select onChange={this.changeProject} value={project}>
                { projects.map(function(project) {
                  return (<option key={project}>{project}</option>)
                })}
              </select>
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
