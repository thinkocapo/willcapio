import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
// import ReactMarkdown from 'react-markdown'
import barranquilla from './road-barranquilla.jpg'
import scooter from './scooter.jpg'
import skateboard from './skate-street.jpg'
import thirtyOne from './thirty-one.jpg'
import twoTruthsOneLie from './two-truths-one-lie.jpg'
import dirtRoadBoarder from './dirt-road-photos.jpg'
import slavNation from './slav_nation.png'

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About">Hi</Header>
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
      <p>I turned 31 in 2019</p>
      <img src={thirtyOne} alt="ThirtyOne" />
      <p>I'm part Slav and won a Halloween Costume contest for it</p>
      <img src={slavNation} alt="SlavNation" />
      <p>Two Truths and One Lie</p>
      <img src={twoTruthsOneLie} alt="TwoTruthsOneLie" />
      <p>I drove on a dirt rode along the US/Mexican border. Forgot my bathing suit.</p>
      <img src={dirtRoadBoarder} alt="DirtRoadBorder" />
      <p>But I'll tell you a story about Barranquilla</p>
      <img src={barranquilla} alt="Barranquilla" />

      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}


      <br></br>





    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
