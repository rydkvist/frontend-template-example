import styles from '../../pages/home/Home.module.css';
import styled from 'styled-components';

const Link = styled.a``;

export const Footer = () => (
  <footer className={styles.footer}>
    <Link
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    </Link>
  </footer>
);
