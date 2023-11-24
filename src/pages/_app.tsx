import '../assets/styles/home/animate.css';
import '../assets/styles/home/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/home/LineIcons.2.0.css';
import '../assets/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SP8ZE7ZLCT`}
      />

      <Script strategy="lazyOnload" id="google-analytics-script">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-SP8ZE7ZLCT', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
