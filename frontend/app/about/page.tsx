import Header from '@/components/Header';
import styles from './page.module.css';

export const metadata = {
  title: 'About | WillCap.io',
  description: 'About Will',
};

export default function About() {
  return (
    <>
      <Header title="About">Hi</Header>
      <div className={styles.container}>
        <h2>Github</h2>
        <p><a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
        
        <h2>LinkedIn</h2>
        <p><a href="https://linkedin.com/in/williamcapozzoli">https://linkedin.com/in/williamcapozzoli</a></p>

        <h2>About Me</h2>
        <p>Coming soon...</p>
      </div>
    </>
  );
}

