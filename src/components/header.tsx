import '../styles/qualtrics.css';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import React from 'react';

export function QualtricsImage() {
  return <StaticImage src="../images/QualtricsXM_WHITE.png" 
                      alt="Qualtrics"
                      layout="fixed"
                      width={100}
                      placeholder="blurred"
                      objectPosition="top left" />
}

const Header = () => {
  return (
    <header className="blueBackground">
      <div className="flex baseline textCenter marginAuto headerWidth" >
        <div className="flex baseline marginAuto headerWidth headerPadding">
          <Link to="/" className="reset headerMarginRight3">
            <div style={{ transform: 'translateY(25%)'  }}>
              {QualtricsImage()}                
            </div>
          </Link>

          <Link to="/instructions/docs/Instructions/overview.md" className="reset textLarge headerMarginRight2">
            <span className="textWhite">Instructions</span>
          </Link>

          <Link to="/guides/docs/Guides/overview.md" className="reset textLarge headerMarginRight2">
            <span className="textWhite">Guides</span>
          </Link>

          <Link to="/api-reference/docs/api-reference.md" className="reset textLarge headerMarginRight2">
            <span className="textWhite">API Reference</span>
          </Link>

          <Link to="/sdks/docs/SDKs/overview.md" className="reset textLarge headerMarginRight2">
            <span className="textWhite">SDKs</span>
          </Link>
          
          {/* Search goes here. */}

        </div>
      </div>

    </header>
  );
};

export default Header;
