import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/prism"; // or prism/xonokai
import Collapsible from 'react-collapsible';
// import ReactMarkdown from 'react-markdown'
// const reactMarkDownInput = `
// #### Project Name
// The **important** details
// `
// hard to style this when you put it inside of the <Collapsible> component
// <ReactMarkdown className="wc-collapsible" source={reactMarkdownInput}/>
const javascriptCode = `
function myStuff() {
    console.log("do things in here")
}
`;
const transitionTime = 100
const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code">examples</Header>
    <Container left={center}>
      <h2>This page is still under construction</h2>
      <p>For now see my code at <a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
      <p>Click / Press</p>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} tabIndex={0} trigger="+ Python">
        <p className="wc-collapsible-p">Description about project and problem the code solves...</p>
        <SyntaxHighlighter language={'python'} style={style}>
            {pythonCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} trigger="+ Javascript">
        <p className="wc-collapsible-p">Description about this project and problem the code solves...</p>
        <SyntaxHighlighter language={'javascript'} style={style}>
            {javascriptCode}
        </SyntaxHighlighter>
      </Collapsible>

      {/* <SyntaxHighlighter language={'javascript'} style={style}>
        {code}
      </SyntaxHighlighter> */}
    </Container>
  </Layout>
);

export default Code;

Code.propTypes = {
  center: PropTypes.object,
};

const pythonCode = `
for strand, nuc in [(+1, seq), (-1, seq.reverse_complement())]:
    for frame in range(3):
        length = 3 * ((len(seq)-frame) // 3) #Multiple of three
        for pro in nuc[frame:frame+length].translate(table).split("*"):
            if len(pro) >= min_pro_len:
                print("%s...%s - length %i, strand %i, frame %i" % (pro[:30], pro[-3:], len(pro), strand, frame))
`