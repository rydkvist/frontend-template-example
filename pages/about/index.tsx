import Head from 'next/head';
import { appName } from 'config';
import { Page } from '@styles';
import { Button } from '@components';

const About = () => {
  const onClick = () => {
    alert('Try tabbing on me instead of clicking me! :)');
  };

  return (
    <>
      <Head>
        <title>{appName}: About</title>
      </Head>
      <Page>
        <h1 style={{ padding: 0, margin: 0 }}>
          <ion-icon name="information-circle-outline" />
        </h1>
        <h1 className="bg-blue-200">About</h1>
        <Button onClick={onClick}>Button 1</Button>
        <Button onClick={onClick}>Button 2</Button>
        <Button onClick={onClick}>Button 3</Button>
        <Button onClick={onClick}>Button 4</Button>
        <Button onClick={onClick}>Button 5</Button>
      </Page>
    </>
  );
};

export default About;
