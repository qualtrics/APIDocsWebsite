import { StoplightProject } from "@stoplight/elements-dev-portal";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { getRedirect } from "../services/redirectTool";

require("@stoplight/elements-dev-portal/styles.min.css");

const GuidesPage = ({ location }) => {
  let redirect = "";
  const nodeUri = location.pathname.split("/guides")[1];
  const anchor = location.hash;
  if (nodeUri.split("/").length > 2) {
    let path = getRedirect("/guides", nodeUri, anchor);
    redirect = path;
  }

  return (
    <div>
      {redirect !== "" ? (
        <Helmet>
          <meta httpEquiv="refresh" content={`0;url=${redirect}`} />
        </Helmet>
      ) : (
        <Layout>
          <StoplightProject
            platformUrl="https://stoplight.io"
            projectId="cHJqOjk3NDQ"
            basePath="guides"
            collapseTableOfContents={true}
            router={typeof window === "undefined" ? "memory" : "history"}
          />
        </Layout>
      )}
    </div>
  );
};

export default GuidesPage;