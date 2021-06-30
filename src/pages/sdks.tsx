import { StoplightProject } from '@stoplight/elements-dev-portal';
import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useEffect } from 'react';

const SDKsPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/sdks/')[1];
  console.log(nodeUri);
  useEffect(() => {
    if (nodeUri == 'ZG9jOjg3NjY0NQ-qualtrics-software-development-kits'){
      window.scrollTo(0, 0);
    }
  });

  return (
    <Layout>
      <SEO title="Qualtrics SDKs" />

      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="sdks"
        router={typeof window === 'undefined' ? 'memory' : 'history'}
      />
    </Layout>
  );
};

export default SDKsPage;
