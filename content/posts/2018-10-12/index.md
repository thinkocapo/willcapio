---
path: "/blockchain"
cover: "./favela.jpg"
date: "2018-10-12"
title: "Blockchain"
tags: ['blockchain', 'software']
published: true
---
    
<!-- That crypto candy.                                                                                                   -->

Ask not what Reddit says, but what you can learn by running a bitcoin node            

Technical Evaluations of Blockchain and How To Start Developing With Them    
https://medium.com/@thinkocapo/technical-evaluations-of-blockchain-and-how-to-start-developing-with-them-807a6e015824

How to Send Ethereum using Node and Web3.js  
https://github.com/thinkocapo/hash-tronic

```javascript
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