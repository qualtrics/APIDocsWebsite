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
            to="/instructions/ZG9jOjg3NjY0Mg-overview"
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">Instructions</span>
          </Link>

          <Link
            to="/guides/ZG9jOjg3NjYzMQ-overview"
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">Guides</span>
          </Link>

          <Link
            to="/api-reference/ZG9jOjg0MDczOA-api-reference"
            className="reset textLarge headerMarginRight2"
          >
            <span className="textWhite">API Reference</span>
          </Link>

          <Link
            to="/sdks/ZG9jOjg3NjY0NQ-qualtrics-software-development-kits"
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
