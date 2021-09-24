import type { AppProps } from "next/app";
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import * as Fathom from 'fathom-client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("YQZGSSWA", {
      includedDomains: ["perhp.dev"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
