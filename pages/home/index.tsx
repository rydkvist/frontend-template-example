import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
        <h1>Home</h1>
      </Main>
    </Page>
  );
};

export default Home;
