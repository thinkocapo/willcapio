---
path: "/education-and-healthcare"
cover: "./ukraine-office.jpg"
date: "2018-10-18"
title: "Education and Healthcare"
tags: ['education', 'software']
published: true
---

Institutions I studied. Courses I took. Areas of health science I've worked in.            

## Education
**2010** *Roger Williams University* B.S. Biology

**2015** *Fullstack Academy* Web Development Immersive

**2016** *Harvard Extension School* Java for Distributed Programming & Hadoop

**2017** *Consensys* Academy Developer Program for Ethereum Programming

**2019** *Harvard Extension School* Principles of Big Data Processing  

## Healthcare & Biotech
</br>

#### B.S. Biology

My favorite courses were Genetics, Virology, Development Biology and Evolutionary Biology. Physics was cool too.

#### Healthcare IT

I worked 4 years at a EMR company so I'm competent with EHR | HIT | FHIR

#### FHIR 

I enjoy programming with and the potential for interoperability.
Here's a slide from a presentation I made on it:

https://www.hl7.org/fhir/ 

![FHIR Interoperability](./fhir-interoperability.jpg)

and how to declare some FHIR Resources which you can create on a FHIR server and map to your EMR's.  
(snippet)  


#### Bioinformatics
I also worked for 2 Biotech Companies building web apps and microservices for supporting R&D.

Management of mRNA sequence data between web apps and AWS for its nucleic sequence design,
registration, ordering, reviewal and tracking by admins in its pipeline from discovery to FDA approval

Developed apps for biopharma

re-building Computational Genomics suite of applications and UI/UX

Currently exploring Sars-COV-2 which is the virus that causes Covid19.
(screenshot|snippet)

## Blockchains
<!-- There's a lot of competition out there regarding blockchains. The best way to learn them is to run them and make your own decision. Run a node -->

Technical Evaluations of Blockchain and How To Start Developing With Them by Will Cap
https://medium.com/@thinkocapo/technical-evaluations-of-blockchain-and-how-to-start-developing-with-them-807a6e015824

How to Send Ethereum via Command Line
https://github.com/thinkocapo/hash-tronic

```
// Make web3 calls to get data for Raw Transaction object tx
export async function createRawTransaction (web3, ether, recipient) {
    const gasPrice = web3.eth.gasPrice; // gasPrice.toString(10)) "10000000000000"
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
    
    return new ethJsTx(rawTx) // Transaction: { raw: [<Buffer >], _fields: ['nonce',]}  
}
```

How to Run a Cardano Node  
https://github.com/thinkocapo/How-to-run-Cardano-Node

How to Run a Bitcoin Node 
https://github.com/thinkocapo/bitcoin-demo

How to Run a EOS Node
https://github.com/thinkocapo/eos-instructions