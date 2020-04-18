import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
// import ReactMarkdown from 'react-markdown'

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
// /prism | /xonokai 
import style from "react-syntax-highlighter/dist/cjs/styles/prism/prism";


// const Prism = require('prismjs');
import Prism from 'prismjs'

// The code snippet you want to highlight, as a string
// python
// const code = `
// for strand, nuc in [(+1, seq), (-1, seq.reverse_complement())]:
//     for frame in range(3):
//         length = 3 * ((len(seq)-frame) // 3) #Multiple of three
//         for pro in nuc[frame:frame+length].translate(table).split("*"):
//             if len(pro) >= min_pro_len:
//                 print("%s...%s - length %i, strand %i, frame %i" \
//                       % (pro[:30], pro[-3:], len(pro), strand, frame))
// `;

// javascript
const code = `
function myStuff() {
    console.log("do thingsi n here")
}
`;

// Returns a highlighted HTML string
// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
// {html}

const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code">examples</Header>
    <Container left={center}>
      <h2>Coming Soon...</h2>
      <p>For now see my code at <a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
  
      <SyntaxHighlighter language={'javascript'} style={style}>
      {/* <SyntaxHighlighter language={'javascript'}> */}
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
