import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/prism"; // or prism/xonokai

// 3. react-collapsable-content
// import {
//     CollapsibleComponent,
//     CollapsibleHead,
//     CollapsibleContent
// } from "react-collapsible-component";
// TODO need to override this with 'padding: 0 0px;'
// ' panel-accordion additionalClassForContent'
// import reactCollapsibleComponent from '../styles/reactCollapsibleComponent';

// 4. react-collapsable
import Collapsible from 'react-collapsible';

const code = `
function myStuff() {
    console.log("do thingsi n here")
}
`;

const pMarginTop = { 'marginTop': '1.45rem' }


const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code">examples</Header>
    <Container left={center}>
      <h2>This page is still under development...</h2>
      <p>For now see my code at <a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
  
      <Collapsible className="redme" tabIndex={0} trigger="+ Python">
        <p>Description about this python project code</p>
        <SyntaxHighlighter language={'python'} style={style}>
            {pythonCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible transitionTime={400} trigger="+ Javascript">
        <p>Description about this javascript project code</p>
        <SyntaxHighlighter language={'javascript'} style={style}>
            {code}
        </SyntaxHighlighter>
      </Collapsible>

        {/* 3 */}
      {/* <CollapsibleComponent>
        <CollapsibleHead className="additionalClassForHead">
            + Python with FHIR API
        </CollapsibleHead>
        <CollapsibleContent className="wc-collapsible-content">

            <p className="pMarginTop">Description about this python project code</p>
            <SyntaxHighlighter language={'python'} style={style}>
                {pythonCode}
            </SyntaxHighlighter>
        </CollapsibleContent>

        <CollapsibleHead isExpanded={false}>
            + Javascript
        </CollapsibleHead>
        <CollapsibleContent isExpanded={false}>
            <p>Description about this javascript project code</p>
            <SyntaxHighlighter language={'javascript'} style={style}>
                {code}
            </SyntaxHighlighter>
        </CollapsibleContent>

        <CollapsibleHead>+ Bash Shell Script</CollapsibleHead>
        <CollapsibleContent>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.{" "}
            </p>
        </CollapsibleContent>
      </CollapsibleComponent> */}



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
                print("%s...%s - length %i, strand %i, frame %i" \
                      % (pro[:30], pro[-3:], len(pro), strand, frame))
`