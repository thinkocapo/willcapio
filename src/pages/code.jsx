import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
// import ReactMarkdown from 'react-markdown'

// import barranquilla from './road-barranquilla.jpg'

// const input = `
// `

const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code Time">to say hi</Header>
    <Container left={center}>
      <h2>Coming Soon...</h2>
      <p>For now see my code at <a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
      
      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}

      <br></br>

    </Container>
  </Layout>
);

export default Code;

Code.propTypes = {
  center: PropTypes.object,
};
