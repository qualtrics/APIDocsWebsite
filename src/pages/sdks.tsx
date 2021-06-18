import { StoplightProject } from '@stoplight/elements-dev-portal';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SDKsPage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/sdks/')[1] || '/docs/SDKs/overview.md';

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
