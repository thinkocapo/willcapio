import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ReactMarkdown from 'react-markdown'

const input = `
## In Brain

#### 2020
book1

#### 2019
book1
book2
book3

#### Not in Brain Yet
book1
book1
`

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="It's About Time">to meet Will</Header>
    <Container left={center}>
      <h2><a href="https://github.com/thinkocapo">Github</a></h2>
      <h2><a href="https://linkedin.com/in/williamcapozzoli">LinkedIn</a></h2>
      {/* <p>I'm a software engineer. I work in Sales. I have a B.S. in Biology. I speak 5 languages.</p> */}

      <br></br>
      <br></br>

      <h2 style={{ 'color': 'blue' }}>Books</h2>
      <h4>In Brain</h4>
      <p>Book1</p>
      <p>Book2</p>
      <h4>Not In Brain Yet</h4>
      <p>Book3</p>
      <p>Book4</p>
      <p>or markdown....</p>
      <ReactMarkdown source={input} />
      <br></br>

      <br></br>
      <br></br>

      <br></br>

      <br></br>

      <br></br>
      <br></br>

      <h2>Music</h2>
      <p>Content1</p>

    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
