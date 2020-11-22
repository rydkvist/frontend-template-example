import { GlobalStyle, Page } from '@styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '@components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </>
  );
};

export default App;
