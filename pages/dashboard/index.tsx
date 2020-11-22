import Head from 'next/head';
import { Header, Footer } from '@components';
import { appName } from '../../config';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>{appName}: Dashboard</title>
      </Head>
      <Header />
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
