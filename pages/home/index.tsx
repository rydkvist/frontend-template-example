import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';
import { Header, Footer } from '@components';
import { sum, subtract } from '@utils';
import { appName } from 'config';
import { Page, Main } from '@styles';

const Home = () => {
  return (
    <Page>
      <Head>
        <title>{appName}: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <h1>Home</h1>

        {/* <Image src="/download_appstore.svg" alt="Download on the App Store" width="auto" height="auto" /> */}
      </Main>

      <Footer />
    </Page>
  );
};

export default Home;
