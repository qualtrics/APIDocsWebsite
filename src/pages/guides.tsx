import { StoplightProject } from '@stoplight/elements-dev-portal';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const GuidesPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/guides/')[1] || '/docs/Guides/overview.md';
  
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
