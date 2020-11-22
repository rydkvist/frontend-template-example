import Head from 'next/head';
import { appName } from 'config';
import { Main, Page } from '@styles';

const Dashboard = () => {
  return (
    <Page>
      <Head>
        <title>{appName}: Dashboard</title>
      </Head>
      <Main>
        <h1 style={{ padding: 0, margin: 0 }}>
          <ion-icon name="grid-outline" />
        </h1>
        <h1>Dashboard</h1>
      </Main>
    </Page>
  );
};

export default Dashboard;
