import Head from 'next/head';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Config from '../config';
import '../public/style.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="d4996a92297e14d1076c4273eb554912"
          name="p:domain_verify"
        />
      </Head>
      <DefaultSeo {...Config.seo} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
