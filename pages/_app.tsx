import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ScrollObserver } from "../components/Globals/ScrollObserver";
import { AnimatePresence } from "framer-motion";
import { ChatVisibleProvider } from "../providers/ChatVisible.provider";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window) {
      console.log(
        "%cHEY YOU! I see you sneaking in my code. This Page is custom built by Priyesh Kadbe. I mainly used Next.js, TailwindCSS and  Typescript as the main tech here. It's something I've worked hard on so please do not copy it directly. LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop me an email at priyeshkadbe49@gmail.com You can find the repo learning purposes for the site here: https://priyeshkadbe.github.io/",
        "background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);"
      );
    }
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <AnimatePresence exitBeforeEnter initial={false}>
        <ScrollObserver>
          <ChatVisibleProvider>
            <Component {...pageProps} />
          </ChatVisibleProvider>
        </ScrollObserver>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
