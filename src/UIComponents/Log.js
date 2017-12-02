import React from 'react';
import { Link } from 'react-router-dom';

const Log = ({log}) => {
    return(
      <div className="card margin-v">
        <div>{log.flightDate}</div>
        <div>{log.projectReference}</div>
        <div>{log.placeName}</div>
        <Link to={`log/${log._id}`} style={{color: '#2979FF'}}>Edit</Link>
      </div>
    )
}

export default Log;
