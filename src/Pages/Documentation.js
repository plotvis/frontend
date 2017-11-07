import React, { Component } from 'react';
import Nav from '../UIComponents/Nav';

class Documentation extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="max-width" style={{paddingTop: '12px'}}>
          <h1>Registration</h1>
          <p>
            In order to use this service, you have to register for an account.
            Registration is simple enough, provide first name, last name, email,
            and a password. Don't worry, we don't sell your information. Once you
            register, you'll be able to log in to your dashboard.
          </p>
          <h1>Uploading</h1>
          <p>
            Before you can take advantage of any graphing tools, you need to upload
            your flight data CSV. We are looking for the following fields in your CSV.
            <ul>
              <li>flightNumber:  Number</li>
              <li>name: String</li>
              <li>flightDate: Date</li>
              <li>placeName: String</li>
              <li>droneName: String</li>
              <li>droneBrand: String</li>
              <li>droneModel: String</li>
              <li>distance: Number</li>
              <li>durationSeconds: Number</li>
              <li>flightType: String</li>
              <li>mainFlightType: String</li>
              <li>notes: String</li>
              <li>conditions: String</li>
              <li>cloudCoverage: Number</li>
              <li>temperature: Number</li>
              <li>wind: Number</li>
              <li>humidity: Number</li>
              <li>maxAltitude: Number</li>
              <li>maxAltitudeAGL: Number</li>
              <li>nbFlight: Number</li>
              <li>creationDate: Date</li>
              <li>pilotInfo: String</li>
              <li>personnel: String</li>
              <li>projectReference: String</li>
              <li>equipment: String</li>
              <li>tags: String</li>
            </ul>
            We're working on ways to dynamically add and remove tags.
          </p>
          <p>
            After a valid upload, you'll be redirected to the dashboard.
          </p>
          <h1>Dashboard</h1>
          <p>
            The dashboard is where you can see and graph all your data.
          </p>
        </div>
      </div>
    );
  }
}

export default Documentation;
