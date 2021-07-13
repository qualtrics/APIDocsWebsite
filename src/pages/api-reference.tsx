import { StoplightProject } from '@stoplight/elements-dev-portal';
import React from 'react';
import Layout from '../components/layout';

require('@stoplight/elements-dev-portal/styles.min.css');

const APIReferencePage = () => {  

  return (
    <Layout>
      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="api-reference"
        collapseTableOfContents={true}
        router={typeof window === 'undefined' ? 'memory' : 'history'
      }
      />
    </Layout>
  );
};

export default APIReferencePage;
