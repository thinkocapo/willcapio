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
        
        <h3>Event Traffic Replay</h3>
        <p>Made with Golang, Python and some GCP for Hackweek <a href="https://github.com/thinkocapo/undertaker">https://github.com/thinkocapo/undertaker</a></p>
        
        <h3>Kubernetes</h3>
        <p>Single-node kubernetes cluster, kubectl and a script that reads data from the Kubernetes API and sends it as events to Sentry. See README. <br /> <a href="https://github.com/sentry-demos/kubernetes">https://github.com/sentry-demos/kubernetes</a></p>

        <h3>Javascript, Ethereum, Geth</h3>
        <p>Sendind ether from cli with an Ethereum node. <a href="https://github.com/thinkocapo/hash-tronic">https://github.com/thinkocapo/hash-tronic</a></p>
        
        <h3>Bash Script</h3>
        <p>Music and flashing lights.<br /><a href="https://github.com/thinkocapo/bash-party-scripting">https://github.com/thinkocapo/bash-party-scripting</a></p>
        
        <h3>Biopython, Covid-19, Jupyter</h3>
        <p>You can see COVID with a computer.<br /><a href="https://github.com/thinkocapo/bio">https://github.com/thinkocapo/bio</a></p>

        <h2>Other Things I Worked On</h2>
        
        <p>Sending GRPC errors to Sentry<br />
        <a href="https://github.com/thinkocapo/golang-grpc">https://github.com/thinkocapo/golang-grpc</a></p>
        
      </div>
    </>
  );
}

