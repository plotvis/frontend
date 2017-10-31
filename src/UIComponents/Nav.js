import React from 'react';
import '../Public/Nav.css';
import { isAuthenticated } from '../Functions/UserManagement';

const Nav = () => {
    return(
      <div>
        <nav>
          Plotvis
          { isAuthenticated() ?
            <button className="pull-right center">Upload</button>
          : null}
        </nav>
        <div className="nav-spacer" />
      </div>
    )
}

export default Nav;
