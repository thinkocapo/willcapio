import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ReactMarkdown from 'react-markdown'

// import barranquilla from './road-barranquilla.jpg'

// const input = `
// ## Test
// <code>
// function heyo() {
//     console.log('lets go')
// }
// </code>
// `

// const input = `
// ## Test
// \`\`\`javascript
// function heyo() {
//     console.log('lets go')
// }
// \`\`\`
// `

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";

// const Prism = require('prismjs');
import Prism from 'prismjs'

// The code snippet you want to highlight, as a string
const code = `var data = 1;`;

// Returns a highlighted HTML string
// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
// {html}

const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code Time">to say hi</Header>
    <Container left={center}>
      <h2>Coming Soon...</h2>
      <p>For now see my code at <a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
  
      <SyntaxHighlighter language={'javascript'}>
        {code}
      </SyntaxHighlighter>


      {/* <ReactMarkdown source={input}/> */}
      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}
      <br></br>

    </Container>
  </Layout>
);

export default Code;

Code.propTypes = {
  center: PropTypes.object,
};
