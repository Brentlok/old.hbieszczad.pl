import type { NextPage } from 'next';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';

const App: NextPage = () => {
  const darkMode = useDarkMode(true);
  return (
    <>
      <Head>
        <title>hbieszczad.pl</title>
        <meta
          name="description"
          content="Hubert Bieszczad - Frontend developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
    </>
  );
};

export default App;
