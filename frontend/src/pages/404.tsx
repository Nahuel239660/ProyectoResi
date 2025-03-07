import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
