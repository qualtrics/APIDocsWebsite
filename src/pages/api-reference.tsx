import { StoplightProject } from '@stoplight/elements-dev-portal';
import { PageProps } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect} from 'react';



const APIReferencePage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/guides/')[1];
  console.log(nodeUri);
  useEffect(() => {
    if (nodeUri == 'ZG9jOjg3NjY0Mg-overview'){
      window.scrollTo(0, 0);
    }
  });

  return (
    <Layout>
      <SEO title="Qualtrics API Reference" />

      <StoplightProject
        platformUrl="https://stoplight.io"
        projectId="cHJqOjk3NDQ"
        basePath="api-reference"
        router={typeof window === 'undefined' ? 'memory' : 'history'
      }
      />

    </Layout>
  );
};


export default APIReferencePage;
