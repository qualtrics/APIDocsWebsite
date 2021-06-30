import '../styles/qualtrics.css';

import React from 'react';

import Header from './header';

require('@stoplight/elements/styles.min.css');


const Layout = ({ children }) => {
  return (
    <div className="greyBackground screenHeight">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
