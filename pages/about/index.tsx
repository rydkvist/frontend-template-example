import Head from 'next/head';
import { appName } from 'config';
import { Main, Page } from '@styles';

const About = () => {
  return (
    <Page>
      <Head>
        <title>{appName}: About</title>
      </Head>
      <Main>
        <h1 className="bg-blue-200">About</h1>
      </Main>
    </Page>
  );
};

export default About;
