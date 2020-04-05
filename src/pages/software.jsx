import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Software = center => (
  <Layout>
    <Helmet title={'Software Page'} />
    <Header title="Software Page">Gatsby Tutorial Starter</Header>
    <Container center={center}>
      <h3>
        This is for Software{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
      </h3>
      <p>A paragraph1</p>
      <p>A paragraph2</p>
      <p>A paragraph3</p>

    </Container>
  </Layout>
);

export default Software;

Software.propTypes = {
  center: PropTypes.object,
};
