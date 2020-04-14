---
path: "/healthcare-and-biotech"
cover: "./ukraine-office.jpg"
date: "2018-10-18"
title: "Healthcare | Biotech"
tags: ['healthcare', 'software']
published: true
---

Areas of health science I've worked in.                             

# Healthcare & Biotech
</br>

### B.S. Biology

My favorite courses were Genetics, Virology, Development Biology and Evolutionary Biology. Physics was cool too.

### Healthcare IT

I worked 4 years at a EMR company called eClinicalWorks. I'm great with EHR, HIT and FHIR.

### FHIR 

I enjoy [FHIR](https://www.hl7.org/fhir/ ) programming and its potential for interoperability.
Here's a slide from a presentation I made on it:

![FHIR Interoperability](./fhir-interoperability.jpg)

Here's the start of an endpoint I wrote for creating FHIR Resources with HL7 FHIR Java Classes
```java
// HAPI FHIR
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.api.MethodOutcome;
// HL7 FHIR
import org.hl7.fhir.r4.model.*;
    
@PostMapping("/claim")
TransactionRes createNewClaim(@Valid @RequestBody NewClaimReq  reqBody) {
    log.info(Thread.currentThread().getStackTrace()[1].toString());

    // REFERENCES of RESOURCES  TO BE CREATED IN HAPI FHIR
    ReferenceIdsRes refIds = new ReferenceIdsRes();

    try {

        // PATIENT
        Patient patientInst = new MakePatient(reqBody).fhirItUp();
        MethodOutcome patientOutcome = fhirClient.create().resource(patientInst).execute();
        Reference patientReference = new MakeReference(patientOutcome).toReference();

        // EPISODE OF CARE
        EpisodeOfCare episodeOfCareInst = new MakeEpisodeOfCare(reqBody, patientReference).fhirItUp();
        MethodOutcome episodeOfCareOutcome = fhirClient.create().resource(episodeOfCareInst).execute();
        Reference episodeOfCareReference = new MakeReference(episodeOfCareOutcome).toReference();
        episodeOfCareInst.setId(toStrRef(episodeOfCareOutcome));
        ...
```

### Biotech / Bioinformatics
I worked for 2 Biotech Companies building web apps and microservices to support their R&D.

Management of mRNA sequence data between web apps and AWS for its nucleic sequence design,
registration, ordering, reviewal and tracking by admins in its pipeline from discovery to FDA approval. Re-building Computational Genomics suite of applications and UI/UX.

I'm exploring Sars-COV-2 which is the virus that causes Covid19 (April, 2020).

https://github.com/thinkocapo/bio
```python
import sys
# !{sys.executable} -m pip install biopython

import pandas as pd
all_data = pd.read_csv('sars-cov-2.csv')
data = all_data[["Species","Genus","Family","Length","Host","BioSample","Sequence","GeographicLocation","NucleotideStatus","GenBankTitle", "IsolationSource", "Country"]]

# number of sequences (records too)
print(data["Sequence"].describe())

# number of unique length'd sequences
print(data["Length"].unique().shape)

def multiple_of_3(coding_dna):
    return True == (len(coding_dna) % 3 == 0)
for coding_dna_strand in data["Sequence"]:
    print(coding_dna_strand.count("N"), multiple_of_3(coding_dna_strand))

# Confirm that Length refers to length of the Sequence
len(data.iloc[4]['Sequence']) == data.iloc[4]['Length']

##### PICK 1 SEQUENCE #####
# sars-cov-19 sample sequence
sample_seq = data.iloc[4]['Sequence']

print(len(sample_seq))

# check there are no missing nucleotides
sample_seq.count("N")

############ BIOPYTHON #############
from Bio.Seq import Seq
from Bio.Alphabet import IUPAC
seq = Seq(sample_seq, IUPAC.unambiguous_dna)
seq

# seq is the coding strand
coding_dna = seq

# Reverse Complement (template strand)
template_dna = coding_dna.reverse_complement()
len(template_dna) == len(coding_dna)

# Transcribe
messenger_rna = coding_dna.transcribe()
messenger_rna

# Transcribe Test
coding_dna_test = messenger_rna.back_transcribe()
coding_dna_test.transcribe() == messenger_rna

# Transcribe - TRUE 
# If you do want to do a true biological transcription starting with the template strand, then this becomes a two-step process:
template_dna.reverse_complement().transcribe()

# CHECK
template_dna.reverse_complement().transcribe() == coding_dna.transcribe()
# output of either of these is the mRNA

coding_dna.translate()

# OPEN READING FRAMES, http://biopython.org/DIST/docs/tutorial/Tutorial.html#htoc295

table = 11
min_pro_len = 100

for strand, nuc in [(+1, seq), (-1, seq.reverse_complement())]:
    for frame in range(3):
        length = 3 * ((len(seq)-frame) // 3) #Multiple of three
        for pro in nuc[frame:frame+length].translate(table).split("*"):
            if len(pro) >= min_pro_len:
                print("%s...%s - length %i, strand %i, frame %i" \
                      % (pro[:30], pro[-3:], len(pro), strand, frame))

data.describe()
sequences = data["Sequence"]

for s in sequences:
    print(s[:3], (len(s) % 3) == 0, s[-3:])

```

## Blockchains

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