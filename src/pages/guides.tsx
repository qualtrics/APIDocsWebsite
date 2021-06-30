import { StoplightProject } from '@stoplight/elements-dev-portal';
import { navigate, PageProps } from 'gatsby';
import React from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const GuidesPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/guides/')[1];
  console.log(nodeUri);
  useEffect(() => {
    if (nodeUri == 'ZG9jOjg3NjYzMQ-overview'){
      window.scrollTo(0, 0);
    }
  });
  
  return (
    <Layout>
      <SEO title="Qualtrics Guides" />

      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="guides"
        router={typeof window === 'undefined' ? 'memory' : 'history'}
      />
    </Layout>
  );
};

export default GuidesPage;
