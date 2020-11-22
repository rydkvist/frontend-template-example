import Head from 'next/head';
import { appName } from 'config';
import { Page } from '@styles';

const Dashboard = () => (
  <>
    <Head>
      <title>{appName}: Dashboard</title>
    </Head>
    <Page>
      <h1 style={{ padding: 0, margin: 0 }}>
        <ion-icon name="grid-outline" />
      </h1>
      <h1>Dashboard</h1>
    </Page>
  </>
);

export default Dashboard;
