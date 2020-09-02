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

const undertakerCode = `
jsonFile, err := os.Open(database)
byteValue, _ := ioutil.ReadAll(jsonFile)

events := make([]Event, 0)
if err := json.Unmarshal(byteValue, &events); err != nil {
		panic(err)
}

for idx, event := range events {
  body, timestamper, bodyEncoder, storeEndpoint = decodeError(event)
  body = eventId(body)
  body = release(body)
  body = user(body)
  body = timestamper(body, event.Platform)
  undertake(body)

  requestBody = bodyEncoder(body)
  request := buildRequest(requestBody, event.Headers, storeEndpoint)
  response, requestErr := httpClient.Do(request)
}
`

const kubernetesCode = `
TL;DR
Pod 1 - sends errors to the K8S Cluster
Pod 2 - consumes errors from K8S Cluster and sends them to Sentry.io

Overview

1. This demo involves running 2 kubernetes pods and the kubernetes cluster.

2. Pod 1 requests too many resources (CPU/RAM) from the K8S cluster, and thus causes an error that gets sent into the Kubernetes Steam/log of Events

3. Pod 2 uses the Sentry Python SDK to capture this error from the Kubernetes Stream and send it as a Event to Sentry.io

4. Docker Images and yaml's are provided for both of these pods.
`

const ethereumCode = `

export async function createRawTransaction (web3, ether, recipient) {
  const gasPrice = web3.eth.gasPrice
  const txCount = web3.eth.getTransactionCount(process.env.fromAddress)
  var gasLimit = web3.eth.getBlock("latest").gasLimit

  const wei = LOG.weiAmountBeingSent(ether)

  const rawTx = {
      nonce: hex(txCount, web3),
      gas: hex("21000", web3),
      gasPrice: hex(web3.toWei('10', 'gwei'), web3),
      to: recipient,
      value: hex(wei, web3)
  }
  LOG.gasPriceInEther(gasPrice, web3)      
  LOG.rawTxData({nonce: txCount, gasPrice, gasLimit, to: recipient, value: ether, chainId: process.env.chainId, data: ""}, rawTx)
  
  return new ethJsTx(rawTx)
}

createRawTransaction(web3, ether, recipient)
  .then(rawTransaction => {
    const transactionSignedSerialized = createSignedSerializedTransaction(rawTransaction, process.env.privateKey)  
    web3.eth.sendRawTransaction('0x' + transactionSignedSerialized.toString('hex'))
      .then((err, result) => {
        if (err) { 
          console.log(error)
        } else { 
          console.log(JSON.stringify(result,null,4))
        }
      })
})
`

const bashCode = `
# plays first song
./bashparty.sh

# adds color
./bashparty.sh --color

# plays random song from ./songs
./bashparty.sh --random

# plays 3rd song from ./songs [0,1,2]
./bashparty.sh --index 2

...

run() {
  play_music
  strobe_light
}
`
const transitionTime = 100
const Code = center => (
  <Layout>
    <Helmet title={'Code'} />
    <Header title="Code">ode to code</Header>
    <Container left={center}>
      <p>Natural languages, programming languages, and music all accomplish the same thing. Message me if you want to examine the similarities between Object Oriented Programming and Sanskrit. After all, "Padartha are the types of objectively real basic features that organise, structure and give identity to individual objects in the cosmos", according to the Vaisheshika.</p>
      
      <p>CLICK THINGS</p>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} tabIndex={0} trigger="+ Go, Python, Google Cloud Functions, Storage">
        <p className="wc-collapsible-p">Event traffic replay at <a href="https://github.com/thinkocapo/undertaker">https://github.com/thinkocapo/undertaker</a></p>
        <SyntaxHighlighter language={'go'} style={style}>
            {undertakerCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} trigger="+ Kubectl">
        <p className="wc-collapsible-p">I got excited one day to play around with a single-node kuberenetes cluster called Minikube. I used getsentry/sentry-kubernetes for a script that reads data from the Kubernetes API and sends it as events to Sentry. My work is in the README. An experience via kubectl that I'll never forget. All commands included. <a href="https://github.com/sentry-demos/kubernetes">https://github.com/sentry-demos/kubernetes</a></p>
        <SyntaxHighlighter language={'md'} style={style}>
            {kubernetesCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} trigger="+ Javascript, Ethereum, Geth">
        <p className="wc-collapsible-p">How to send ether from cli with an Ethereum node. <a href="https://github.com/thinkocapo/hash-tronic">https://github.com/thinkocapo/hash-tronic</a></p>
        <SyntaxHighlighter language={'javascript'} style={style}>
            {ethereumCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} trigger="+ Bash Script">
        <p className="wc-collapsible-p">You are going to love this GIF. Especially when you use the included music. <a href="https://github.com/thinkocapo/hash-tronic">https://github.com/thinkocapo/hash-tronic</a></p>
        <SyntaxHighlighter language={'bash'} style={style}>
            {bashCode}
        </SyntaxHighlighter>
      </Collapsible>

      <Collapsible 
        className="wc-collapsible" 
        openedClassName="wc-collapsible"
        transitionTime={transitionTime} trigger="+ Biopython, Covid-19, Jupyter">
        <p className="wc-collapsible-p">Look. It's SARS-COV-2, the virus that causes COVID-19.</p>
        <SyntaxHighlighter language={'bash'} style={style}>
            {'https://github.com/thinkocapo/bio'}
        </SyntaxHighlighter>
      </Collapsible>

      {/* <p><a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p> */}
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