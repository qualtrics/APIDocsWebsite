import "../styles/qualtrics.css";
import QualtricsLogo from "../images/QualtricsXM_WHITE.png";
import { Link } from "gatsby";
import React from "react";

import { Search } from './Search';



const Header = () => {

  return (
    <header className="blueBackground">
      <div className="flex baseline textCenter marginAuto headerWidth">
        <div className="flex baseline marginAuto headerWidth headerPadding">
          <Link to="/" className="reset headerMarginRight3">
            <div style={{ transform: "translateY(25%)" }}>
              <img src={QualtricsLogo} alt="Qualtrics" width="100" />
            </div>
          </Link>

          <Link
            to="/ZG9jOjg3NjY0Mg-overview"
            activeStyle={{ color: "red" }}
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">Instructions</span>
          </Link>

          <Link
            to="/ZG9jOjg3NjYzMQ-overview"
            activeStyle={{ color: "red" }}
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">Guides</span>
          </Link>

          <Link
            to="/ZG9jOjg0MDczOA-api-reference"
            activeStyle={{ color: "red" }}
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">API Reference</span>
          </Link>

          <Link
            to="/ZG9jOjg3NjY0NQ-qualtrics-software-development-kits"
            activeStyle={{ color: "red" }}
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">SDKs</span>
          </Link>
          
          <Search projectIds={['cHJqOjk3NDQ']} />
          {/* Search goes here. */}
        </div>
      </div>
    </header>
  );
};

export default Header;
