import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import { theme_script } from '../utils/theme_script';
import { getData } from '../utils/getData';
import type { Context } from '../context';
import { DataContext } from '../context';

import Navigation from '../components/Navigation';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export async function getStaticProps() {
  const { allProjects, description } = await getData();
  return {
    props: { allProjects, description },
  };
}

const App: NextPage<Context> = (staticProps) => {
  return (
    <DataContext.Provider value={staticProps}>
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
      <Contact />
    </DataContext.Provider>
  );
};

export default App;
