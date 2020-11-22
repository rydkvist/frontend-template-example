import Head from 'next/head';
import { Header, Footer } from '@components';
import { appName } from 'config';
import { Main, Page } from '@styles';

const About = () => {
  return (
    <Page>
      <Head>
        <title>{appName}: About</title>
      </Head>
      <Main>
        <Header />

        <h1>About</h1>
      </Main>
    </Page>
  );
};

export default About;
