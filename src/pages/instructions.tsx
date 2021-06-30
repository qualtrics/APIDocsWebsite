import { StoplightProject } from '@stoplight/elements-dev-portal';
import { PageProps } from 'gatsby';
import React from 'react';
import { useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const InstructionsPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/instructions/')[1];
  console.log(nodeUri);
  useEffect(() => {
    if (nodeUri == 'ZG9jOjg3NjY0Mg-overview'){
      window.scrollTo(0, 0);
    }
  });
  
  return (
    <Layout>
      <SEO title="Qualtrics Instructions" />

      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="instructions"
        router={typeof window === 'undefined' ? 'memory' : 'history'}
      />
    </Layout>
  );
};

export default InstructionsPage;
