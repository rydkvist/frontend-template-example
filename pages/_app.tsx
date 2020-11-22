import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle, Main } from '@styles';
import { Header, Footer } from '@components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <script type="module" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js" />
      </Head>
      <GlobalStyle />
      <Header />
      <Main role="main">
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
};

export default App;
