import Head from 'next/head';
import { appName } from 'config';
import { Page } from '@styles';
import { Button } from '@components';

const Dashboard = () => {
  const onClick = () => {
    alert('Try tabbing on me instead of clicking me! :)');
  };

  return (
    <>
      <Head>
        <title>{appName}: Dashboard</title>
      </Head>
      <Page>
        <h1 style={{ padding: 0, margin: 0 }}>
          <ion-icon name="grid-outline" />
        </h1>
        <h1>Dashboard</h1>
        <Button onClick={onClick}>Button 1</Button>
        <Button onClick={onClick}>Button 2</Button>
        <Button onClick={onClick}>Button 3</Button>
        <Button onClick={onClick}>Button 4</Button>
        <Button onClick={onClick}>Button 5</Button>
      </Page>
    </>
  );
};

export default Dashboard;
