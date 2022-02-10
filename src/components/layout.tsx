import "../styles/qualtrics.css";
import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="Layout greyBackground">
      <Header />
      <main className="MainContent">{children}</main>
    </div>
  );
};

export default Layout;
