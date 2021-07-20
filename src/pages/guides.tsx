import { StoplightProject } from "@stoplight/elements-dev-portal";
import React from "react";
import Layout from "../components/layout";

require("@stoplight/elements-dev-portal/styles.min.css");

const GuidesPage = () => {
  return (
    <Layout>
      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="guides"
        collapseTableOfContents={true}
        router={typeof window === "undefined" ? "memory" : "history"}
      />
    </Layout>
  );
};

export default GuidesPage;
