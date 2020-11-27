import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { appName } from 'config';
import { Page } from '@styles';
import { Button } from '@components';

const Home = () => {
  const onClick = () => {
    alert('Try tabbing on me instead of clicking me! :)');
  };

  return (
    <>
      <Head>
        <title>{appName}: Home</title>
      </Head>
      <Page>
        <h1 style={{ padding: 0, margin: 0 }}>
          <ion-icon name="home-outline" />
        </h1>
        <h1>Home</h1>
        <Button onClick={onClick}>Button 1</Button>
        <Button onClick={onClick}>Button 2</Button>
        <Button onClick={onClick}>Button 3</Button>
        <Button onClick={onClick}>Button 4</Button>
        <Button onClick={onClick}>Button 5</Button>
      </Page>
    </>
  );
};

export default Home;
