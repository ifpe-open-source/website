import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';

import '../styles/modalAnimation.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.header}
        />
        <meta name="msapplication-TileColor" content={theme.header} />
        {theme === darkTheme ? (
          <meta name="color-scheme" content="dark" />
        ) : (
          <meta name="color-scheme" content="light" />
        )}
        <meta name="theme-color" content={theme.header} />
      </Head>
      <Component {...pageProps} setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
