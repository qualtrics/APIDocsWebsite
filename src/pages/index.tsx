import { StoplightProject } from "@stoplight/elements-dev-portal";
import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import { getRedirect } from "../services/redirectTool";

import PostmanIcon from '../components/PostmanIcon';
import ApiIcon from "../components/ApiIcon";

const isBrowser = typeof location !== "undefined";

const IndexPage = () => {
  let isHome = false;
  let redirect = "";
  const currentPath = isBrowser ? location.pathname : "";
  console.log(currentPath);
  // Need to know if its the home page for render switch below
  if (currentPath === "" || currentPath === "/") {
    isHome = true;
  }
  // These conditions remove the V2 links (used to be separate pages)
  else if (currentPath.indexOf("/guides/") !== -1) {
    redirect = currentPath.replace("/guides", "");
  } else if (currentPath.indexOf("/instructions/") !== -1) {
    redirect = currentPath.replace("/instructions", "");
  } else if (currentPath.indexOf("/api-reference/") !== -1) {
    redirect = currentPath.replace("/api-reference", "");
  } else if (currentPath.indexOf("/sdks/") !== -1) {
    redirect = currentPath.replace("/sdks", "");
  }
  // This condition uses the redirect tool to handle V1 links
  // V1 Links used a stoplight version that used the actual file path
  // from the docs github. Stoplight changed to using a slug that hides
  // that path information
  else if (
    (currentPath.indexOf("/docs/") !== -1 ||
      currentPath.indexOf("/reference/") !== -1) &&
    isBrowser
  ) {
    const nodeUri = location.pathname;
    const anchor = location.hash;
    if (nodeUri.split("/").length > 2) {
      // first param used to be V2 page path - no longer needed
      let path = getRedirect(nodeUri, anchor);
      redirect = path;
    }
  } else if (currentPath.split("/").length == 2) {
    let path = getRedirect(currentPath, "");
    if (path !== "/")
    {
      redirect = path;
    }
  }
  return (
    <div>
      {redirect !== "" ? (
        <Helmet>
          <meta httpEquiv="refresh" content={`0;url=${redirect}`} />
        </Helmet>
      ) : (
        <Layout>
          {!isHome && (
            <StoplightProject
              platformUrl="https://stoplight.io"
              projectId="cHJqOjk3NDQ"
              collapseTableOfContents={true}
              router={typeof window === "undefined" ? "memory" : "history"}
            />
          )}
          {isHome && (
            <div className="scrollBox">
              <div className="height24rem blueBackground flex flexColumn itemsCenter justifyCenter">
                <div className="headerWidth marginAuto textCenter textWhite">
                  <div className="text26px mb5">Qualtrics API Docs</div>
                  <div className="text18px maxWidth48rem opacity75">
                    Documentation for the Qualtrics API Platform.
                  </div>
                </div>
              </div>
              <div className="headerWidth marginAuto marginTop5ren">
                <div className="flex flexWrap">
                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/ZG9jOjg3NjY0Mg-overview"
                  >
                    <div className="card2">
                      <div className="flex">
                        <svg
                          data-icon="book"
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                        >
                          <desc>book</desc>
                          <path
                            d="M3 1v18c0 .55.45 1 1 1h2V0H4c-.55 0-1 .45-1 1zm14-1h-2v8l-2-2-2 2V0H7v20h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">Instructions</div>
                          <p>
                            Get started quickly with the API with basic
                            instructions
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/ZG9jOjg3NjYzMQ-overview"
                  >
                    <div className="card2">
                      <div className="flex">
                        <svg
                          data-icon="manual"
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                        >
                          <desc>manual</desc>
                          <path
                            d="M20 1.1a.976.976 0 00-.83-.88C15.15-.43 12.07.34 10 2.5 7.93.34 4.85-.43.84.22.37.3.03.67 0 1.1v15.01c0 .07 0 .14.01.21.09.52.61.88 1.15.79 3.85-.62 6.4.16 8 2.46.02.02.03.04.05.07.02.02.04.04.06.07l.01.01a1.07 1.07 0 00.28.19c.01 0 .01.01.02.01.03.01.07.03.1.04.01 0 .02.01.04.01.03.01.07.02.1.02.01 0 .02 0 .04.01H10c.04 0 .09 0 .13-.01.01 0 .03 0 .04-.01.03-.01.06-.01.1-.02.01 0 .03-.01.04-.01.03-.01.07-.02.1-.04.01 0 .02-.01.03-.01.07-.03.13-.07.19-.11.01 0 .01-.01.02-.01.02-.02.04-.03.06-.05.01-.01.02-.02.03-.02l.05-.05c.01-.01.02-.02.02-.03.01-.02.02-.03.04-.05 1.61-2.3 4.15-3.09 8-2.46.54.09 1.06-.26 1.15-.79-.01-.05 0-.09 0-.13V1.1zM9 16.63c-1.78-1.31-4.12-1.83-7-1.55V2c3.26-.37 5.51.39 7 2.35v12.28zm9-1.56c-2.88-.28-5.22.24-7 1.55V4.34c1.49-1.96 3.74-2.71 7-2.35v13.08z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">Guides</div>
                          <p>Learn how to use the API with how-to guides</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/ZG9jOjg0MDczOA-api-reference"
                  >
                    <div className="card2">
                      <div className="flex">
                        <svg
                          data-icon="cloud"
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                        >
                          <desc>cloud</desc>
                          <path
                            d="M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 000 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">API Reference</div>
                          <p>
                            Discover endpoints you can use to build innovative
                            solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/ZG9jOjg3NjY0NQ-qualtrics-software-development-kits"
                  >
                    <div className="card2">
                      <div className="flex">
                        <svg
                          data-icon="code"
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                        >
                          <desc>code</desc>
                          <path
                            d="M6 6a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71zm6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1zm7.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">SDKs</div>
                          <p>
                            Development Kits for Building your own Applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="textXXLarge mt10 mb5">
                  <p>Popular</p>
                </div>
                <div className="flex flexWrap">
                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/madpkwrp3y5mz-getting-started-with-qualtrics-public-collections-in-postman"
                  >
                    <div className="card2">
                      <div className="flex">
                      <PostmanIcon width="24" height="24"/>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">Postman</div>
                          <p>
                          Visit our public API collections in Postman — an easy and comprehensive access point to explore all our public APIs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex flexWrap mt10">
                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/08f3724a4ea0b-additional-security"
                  >
                    <div className="card2">
                      <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>

                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">IP Address Allowlisting & Mutual TLS
                          </div>
                          <p>
                          Learn more about our advanced security options, like IP address allowlisting and Mutual Transport Layer Security (mTLS).
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex flexWrap mt10">
                  <a
                    className="reset headerMarginRight3 marginBottom10 flex-1-1"
                    href="/i44e8ozanrjjw-api-usage-report"
                  >
                    <div className="card2">
                      <div className="flex">
                      <ApiIcon width="24" height="24"/>
                        <div className="flex-1-1 marginLeft-1rem">
                          <div className="textXLarge">API Usage Reports</div>
                          <p>
                            Review individual API calls made by your brand, the status of API calls, and API call volume over time. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </Layout>
      )}
    </div>
  );
};

export default IndexPage;
