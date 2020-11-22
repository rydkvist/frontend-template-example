import { GlobalStyle } from '@styles';
import { AppProps } from 'next/app';
import 'styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
