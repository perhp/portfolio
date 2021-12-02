import * as Fathom from "fathom-client";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("YQZGSSWA", {
      includedDomains: ["perhp.com"],
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
