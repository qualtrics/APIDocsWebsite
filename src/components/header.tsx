import './header.css';

import { Link } from 'gatsby';
import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/qualtrics" className="Header__link" activeClassName="Header__link--active">
        Stoplight Project
      </Link>

    </header>
  );
};

export default Header;
