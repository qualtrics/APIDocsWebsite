import { StoplightProject } from '@stoplight/elements-dev-portal';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const InstructionsPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/instructions/')[1] || '/docs/Instructions/overview.md';
  
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
