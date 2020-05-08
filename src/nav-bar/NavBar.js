import * as React from 'react';
import './NavBar.scss'

const NavBar = ({ links = [] }) => {
  return (
    <div id="nav-wrapper" className="container">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-resume">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link, index) => <li key={index} className="nav-item"><a
              className={'nav-link' + (index === 0 ? ' active' : '')} href={'#' + link}>{link}</a></li>)}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
