import React from 'react';
import './Footer.scss';

const Footer = ({ name, children }) => {
  return (
    <footer id="footer" className="pt-5 pb-3 text-center">
      <div className="container">
        {children}
        <p>© Copyright 2020 {name}</p>
      </div>
    </footer>
  );
}

export default Footer;
