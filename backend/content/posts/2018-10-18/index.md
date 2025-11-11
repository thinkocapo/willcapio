---
path: "/healthcare-and-biotech"
cover: "./ukraine-office.jpg"
date: "2018-10-18"
title: "Healthcare & Biotech"
tags: ['healthcare', 'software']
published: true
preview: my first career
---                                      

### B.S. Biology 2010

My favorite courses were Genetics, Virology, Development Biology and Evolutionary Biology. Physics was cool too.

### Healthcare IT

I worked 4 years at a EMR company called eClinicalWorks. I'm great with EHR, HIT and FHIR.

### FHIR 

I enjoyed exploring [FHIR](https://www.hl7.org/fhir/ ) programming and its potential for solving interoperability.
Here's a diagram I made on the interoperability problem. I once used it in a presentation.

![FHIR Interoperability](./fhir-interoperability.jpg)

Example endpoint for creating a Patient Claim using FHIR Resource objects.
```java
// HAPI FHIR
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.api.MethodOutcome;
// HL7 FHIR
import org.hl7.fhir.r4.model.*;
    
@PostMapping("/claim")
TransactionRes createNewClaim(@Valid @RequestBody NewClaimReq  reqBody) {

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
