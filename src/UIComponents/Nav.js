import React from 'react';
import '../Public/Nav.css';

const Nav = () => {
    return(
      <div>
        <nav>
          Plotvis
          <button className="pull-right">Upload</button>
        </nav>
        <div className="nav-spacer" />
      </div>
    )
}

export default Nav;
