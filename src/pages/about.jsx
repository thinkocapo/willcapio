import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="It's About Time">to meet Will</Header>
    <Container center={center}>
      <h2><a href="https://github.com/thinkocapo">Github</a></h2>
      <h2><a href="https://linkedin.com/in/williamcapozzoli">LinkedIn</a></h2>
      {/* <p>I'm a software engineer. I work in Sales. I have a B.S. in Biology. I speak 5 languages.</p> */}

      <br></br>
      <br></br>

      <br></br>

      <br></br>
      <br></br>

      <br></br>

      <br></br>

      <br></br>
      <br></br>

    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
