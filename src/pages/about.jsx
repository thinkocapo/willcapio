import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ReactMarkdown from 'react-markdown'
import barranquilla from './road-barranquilla.jpg'
import scooter from './scooter.jpg'
import skateboard from './skate-street.jpg'
import thirtyOne from './thirty-one.jpg'
import twoTruthsOneLie from './two-truths-one-lie.jpg'

const input = `


`

// TODO - React function so can pass an array of books...
// OPTIONAL - insert some quotes

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About Time">to say hi</Header>
    <Container left={center}>
      <h2>Github</h2>
      <p><a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
      <h2>LinkedIn</h2>
      <p><a href="https://linkedin.com/in/williamcapozzoli">https://linkedin.com/in/williamcapozzoli</a></p>
      {/* <p>I'm a software engineer. I work in Sales. I have a B.S. in Biology. I speak 5 languages.</p> */}

      <h2>About Me</h2>
      <p>I scooter</p>
      <img src={scooter} alt="Scooter" />
      <p>I skate</p>
      <img src={skateboard} alt="Skateboard" />
      <p>I turned 31</p>
      <img src={thirtyOne} alt="ThirtyOne" />
      <p>Two Truths and One Lie</p>
      <img src={twoTruthsOneLie} alt="TwoTruthsOneLie" />
      <p>I'll tell you about Barranquilla</p>
      <img src={barranquilla} alt="barranquilla" />

      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}


      <br></br>





    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
