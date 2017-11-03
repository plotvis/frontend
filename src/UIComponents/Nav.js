import React from 'react';
import { Link } from 'react-router-dom';
import '../Public/Nav.css';
import { isAuthenticated, destroyUser } from '../Functions/UserManagement';

const Nav = () => {
    return(
      <div>
        <nav>
          <Link to={ isAuthenticated() ? '/dashboard' : '/' }>Plotvis</Link>
          { isAuthenticated() ?
            <div className="links">
              <Link to="upload"><button>Upload</button></Link>
              <Link to="login"><button onClick={ (e) => destroyUser() }>Log out</button></Link>
            </div>
          : null}
        </nav>
        <div className="nav-spacer" />
      </div>
    )
}

export default Nav;
