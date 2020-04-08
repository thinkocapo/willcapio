import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ReactMarkdown from 'react-markdown'

const input = `

#### 2020
book1

#### 2019
book1
book2
book3

#### To Read
book1
book1
`

// TODO - React function so can pass an array of books...
// OPTIONAL - insert some quotes

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="It's About Time">to meet Will</Header>
    <Container left={center}>
      <h2><a href="https://github.com/thinkocapo">Github</a></h2>
      <h2><a href="https://linkedin.com/in/williamcapozzoli">LinkedIn</a></h2>
      {/* <p>I'm a software engineer. I work in Sales. I have a B.S. in Biology. I speak 5 languages.</p> */}

      <h2 style={{ 'color': 'blue' }}>Books</h2>
      <h4>2020</h4>
      <p>Western Civilization</p>

      <h4>2019</h4>
      <p>Alchemy of Finance by George Soros</p>
      <p>Soros on Soros by George Seoros</p>
      <p>Sons of Witchita - THe Koch Brothers, by Author</p>
      <p>Devil's Bargain - </p>
      <p>Ben Frankling: An American Life by Walter Isaacson</p>
      
      <h4>2018</h4>
      <p>Book3</p>
      <p>Book4</p>
      <p>or quotes</p>
      

      <h4>Next</h4>
      <p>Book4</p>

      {/* <ReactMarkdown source={input} /> */}
      <br></br>


      <h2>Music</h2>
      <p>Youtube link1</p>
      <p>Concerts/Festivals been to</p>
      <p>Musical Instrument/Footage from another Country</p>


    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
