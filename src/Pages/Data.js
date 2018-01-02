import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UIComponents/Nav';
import '../Public/Login.css';
import { apiGet, apiPost } from '../Functions/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      place: '',
      projects: [],
      project: '',
      date: '',
      address: ''
    }
  }

  componentWillMount = () => {
    apiGet('graphData/uniques?placeName&projectReference').then((data) => {
      const places = data.uniques.placeName;
      this.setState({places: places, place: places[0]});
    });

    apiGet('projects').then((data) => {
      console.log(data);
      this.setState({projects: data.projects, project: data.projects[0].name});
    })
  }

  changePlace = (e) => {
    this.setState({place: e.target.value});
  }

  changeProject = (e) => {
    this.setState({project: e.target.value});
  }

  changeDate = (e) => {
    this.setState({date: e.target.value});
  }

  saveDate = (e) => {
    if (this.state.date === '') {
      return;
    }

    // let id;
    // for(let i = 0; i < this.state.projects.length; i++) {
    //   if (this.state.projects[i].name === this.state.project) {
    //     id = this.state.projects[i]._id
    //   }
    // }
    const id = this.state.projects.find(x => x.name === this.state.project)._id;
    const date = new Date(this.state.date);

    apiPost(`projects/${id}`, { date: date }).then((data) => {
      console.log(data);
    })
  }

  render() {
    const { places, place, projects, project, date, address } = this.state;

    return (
      <div>
        <Nav />
        <div className="max-width">
          <h1 className="margin-top">Data Update</h1>
          <div className="card">
            <h2 style={{margin: '0px'}}>Planting Date</h2>
            <p style={{marginTop: '0px'}}>Update the planting date for the chosen project</p>
            <select onChange={this.changeProject} value={project.name}>
              { projects.map(function(project) {
                return (<option key={project._id}>{project.name}</option>)
              })}
            </select>
            <input type='date' className="margin-top" placeholder="Date" onChange={this.changeDate} value={date}></input>
            <button className="margin-top" onClick={this.saveDate}>Save</button>
          </div>
          <div className="card margin-top">
            <h2 style={{margin: '0px'}}>Address Update</h2>
            <p style={{marginTop: '0px'}}>Update the address for each plot</p>
            <select onChange={this.changePlace} value={place}>
              { places.map(function(place) {
                return (<option key={place}>{place}</option>)
              })}
            </select>
            <input type='text' className="margin-top" placeholder="Address" onChange={this.changeAddress}></input>
            <button className="margin-top" onClick={this.saveAddress}>Save</button>
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
