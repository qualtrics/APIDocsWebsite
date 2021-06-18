import { StoplightProject } from '@stoplight/elements-dev-portal';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';


const APIReferencePage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/instructions/')[1] || '/docs/api-reference.md';

  return (
    <Layout>
      <SEO title="Qualtrics API Reference" />

      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="api-reference"
        router={typeof window === 'undefined' ? 'memory' : 'history'}
      />
    </Layout>
  );
};
export default APIReferencePage;
