import { createSwaggerSpec } from 'next-swagger-doc';
import "swagger-ui-react/swagger-ui.css"
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicSwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});

const ApiDoc = ({ spec }) => {
  return <DynamicSwaggerUI url="https://petstore.swagger.io/v2/swagger.json" spec={spec} />;
};

export const getStaticProps = async ctx => {
  const spec = createSwaggerSpec({
    title: 'Back End Demo - Swagger Docs',
    version: '0.1.0',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Back End Demo - Swagger Docs',
        version: '0.1.0',
      },
    },
  });
  return { props: { spec } };
};

export default ApiDoc;
