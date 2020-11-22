import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sum, subtract } from '@utils';
import { appName } from 'config';
import { Page, Main } from '@styles';

const Home = () => (
  <>
    <Head>
      <title>{appName}: Home</title>
    </Head>
    <Main>
      <h1 style={{ padding: 0, margin: 0 }}>
        <ion-icon name="home-outline" />
      </h1>
      <h1>Home</h1>
    </Main>
  </>
);

export default Home;
