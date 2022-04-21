import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import { theme_script } from '../utils/theme_script';

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hubert Bieszczad | Frontend Developer</title>
        <meta
          name="description"
          content="Hubert Bieszczad | Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="theme-script"
        dangerouslySetInnerHTML={{
          __html: theme_script,
        }}
      ></Script>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default App;
