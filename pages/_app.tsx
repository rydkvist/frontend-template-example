import 'styles/tailwind.css';
import { GlobalStyle } from '@styles';
import { AppProps } from 'next/app';
import { Header, Footer } from '@components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
