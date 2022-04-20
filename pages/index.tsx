import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import About from '../sections/About';
import Hero from '../sections/Hero';

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
          __html: `(function() {
              // Update the current theme to either 'light' or 'dark'
              function setTheme(theme) {
                window.__theme = theme;
                if (theme === 'dark') {
                  document.documentElement.className = 'dark';
                } else {      
                  document.documentElement.className = '';
                }
              };
            
              // Save the user's explicit theme preference.
              // We're attaching this to window so we can access it anywhere.
              // We'll need it later in this post.
              window.__setPreferredTheme = function(theme) {
                setTheme(theme);
                try {
                  localStorage.setItem('preferred-theme', theme);
                } catch (e) {}
              };
            
              // Is there a Saved Theme Preference in localStorage?
              let preferredTheme;
              try {
                preferredTheme = localStorage.getItem('preferred-theme');
              } catch (e) {}
            
              // Is there an Operating System Preference?
              let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));})();`,
        }}
      ></Script>
      <Navigation />
      <Hero />
      <About />
    </>
  );
};

export default App;
