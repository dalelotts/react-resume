import * as React from 'react';
import './Header.scss'

const Header = ({ children = [] }) => {
  return (
    <header className="pb-5">
      {children}
    </header>
  );
};

export default Header;
