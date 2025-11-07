import Header from '@/components/Header';
import styles from './page.module.css';

export const metadata = {
  title: 'Code | WillCap.io',
  description: 'Ode to code',
};

export default function Code() {
  return (
    <>
      <Header title="Code">ode to code</Header>
      <div className={styles.container}>
        <p>&quot;Natural languages, programming languages, and music all accomplish the same thing. Message me if you want to examine the similarities between Object Oriented Programming and Sanskrit. After all, &quot;Padartha are the types of objectively real basic features that organise, structure and give identity to individual objects in the cosmos&quot;, according to the Vaisheshika.&quot;</p>
        
        <h2>Projects</h2>
        
        <h3>Go, Python, Google Cloud Functions, Storage</h3>
        <p>Event traffic replay at <a href="https://github.com/thinkocapo/undertaker">https://github.com/thinkocapo/undertaker</a></p>
        
        <h3>Kubernetes</h3>
        <p>I got excited one day to play around with a single-node kubernetes cluster called Minikube. I used getsentry/sentry-kubernetes for a script that reads data from the Kubernetes API and sends it as events to Sentry. My work is in the README. An experience via kubectl that I&apos;ll never forget. <a href="https://github.com/sentry-demos/kubernetes">https://github.com/sentry-demos/kubernetes</a></p>
        
        <h3>Javascript, Ethereum, Geth</h3>
        <p>How to send ether from cli with an Ethereum node. <a href="https://github.com/thinkocapo/hash-tronic">https://github.com/thinkocapo/hash-tronic</a></p>
        
        <h3>Bash Script</h3>
        <p>You are going to love this. Especially when you use the included music. <a href="https://github.com/thinkocapo/bash-party-scripting">https://github.com/thinkocapo/bash-party-scripting</a></p>
        
        <h3>Biopython, Covid-19, Jupyter</h3>
        <p>Look. It&apos;s SARS-COV-2, the virus that causes COVID-19. <a href="https://github.com/thinkocapo/bio">https://github.com/thinkocapo/bio</a></p>

        <h2>Other Things I Worked On</h2>
        
        <p>Demo of GRPC errors captured by Sentry<br />
        <a href="https://github.com/thinkocapo/golang-grpc">https://github.com/thinkocapo/golang-grpc</a></p>
        
        <p>A Go script that reads data out of Cloud Storage, transforms it and sends it up to Sentry.io.<br />
        <a href="https://github.com/getsentry/replay">https://github.com/getsentry/replay</a> (forked from <a href="https://github.com/thinkocapo/undertaker">https://github.com/thinkocapo/undertaker</a>)</p>
      </div>
    </>
  );
}

