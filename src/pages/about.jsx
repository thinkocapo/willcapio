import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ReactMarkdown from 'react-markdown'

const input = `
#### h4 can't style me?
redux

\`\`\`
App extends Class {
    this.redux = 
}
\`\`\`

#### h4
bash party
`

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

      <h2 style={{ 'color': 'blue' }}>Books</h2>
      <p>Book1</p>
      <p>Book2</p>
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
