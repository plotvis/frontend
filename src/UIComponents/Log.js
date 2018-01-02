import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

const Log = ({log}) => {
  const flightDate = new Date(log.flightDate);

  return(
    <div className="trow">
      <Link to={`log/${log._id}`}>
        <div className="row">
          <div className="col-4">{dateFormat(flightDate, "mmmm dS, yyyy")}</div>
          <div className="col-4">{log.projectReference}</div>
          <div className="col-4">{log.placeName}</div>          
        </div>
      </Link>
    </div>
  )
}

export default Log;
