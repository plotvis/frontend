import React, { Component } from 'react';
import Nav from '../UIComponents/Nav';
import Dropzone from 'react-dropzone';
import { apiUpload } from '../Functions/api';
import { API_URL } from '../config.js';
import { getToken } from '../Functions/UserManagement';
import PropTypes from 'prop-types';

class Upload extends Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  upload = () => {
    var formData = new FormData();
    formData.append('csv', this.state.files[0]);

    fetch(`${API_URL}logs/upload`, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: new Headers({
        token: getToken()
      })
    })
    .then(response => response.json())
    .then((data) => {
      if (data.success) {
        this.context.router.history.push('/dashboard');
      }
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="max-width margin-top">
          <h1>File Upload</h1>
          <p>Drop your file below to upload.</p>
          <p>
            File Requirements:<br/>
            • CSV
          </p>
          <Dropzone multiple={false} onDrop={this.onDrop.bind(this)} className="dropzone" style={{width: '100%', height: '100px', border: '2px dashed #808080', background: '#efefef', 'lineHeight': '100px', textAlign: 'center', cursor: 'pointer'}}>
            { this.state.files.length > 0 ?
              this.state.files.map(f => <span key={f.name}>{f.name}</span>)
              : 'Click or Drop to upload'}
          </Dropzone>
          <button className="margin-top" onClick={this.upload}>Confirm Upload</button>
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

export default Upload;
