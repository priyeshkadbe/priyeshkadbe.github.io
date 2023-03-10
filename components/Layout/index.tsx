import Head from "next/head";
import Script from "next/script";
import Laptop from "../Navbar/Laptop";
import Mobile from "../Navbar/Mobile";
import Footer from "../Footer";
import { CRIPS_WEBSITE_ID } from "../../utils/constants";
import { useChatVisibleState } from "../../providers/ChatVisible.provider";
type Props = {
  children: React.ReactNode;
  currentPage: string;
};

function Layout({ children, currentPage }: Props) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Priyesh Kadbe - Full Stack Developer | Portfolio"
      : `Priyesh Kadbe - Full Stack Developer | ${currentPage} `
  }`;

  const { isChatVisible } = useChatVisibleState();

  return (
    <>
      <Head>{pageTitle}</Head>
      <Script
        id="crisp-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.$crisp=[];
           window.CRISP_WEBSITE_ID=\`${CRIPS_WEBSITE_ID}\`;
           (function(){
             const d = document;
             const s = d.createElement("script");
             s.src = "https://client.crisp.chat/l.js";
             s.async = 1;
             d.getElementsByTagName("head")[0].appendChild(s);
           })();`,
        }}
      />
      <main>
        <div className="hidden md:block z-100">
          <Laptop currentPage={currentPage} />
        </div>
        <div className=" block md:hidden z-100">
          <Mobile />
        </div>
        <div className="min-h-screen">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
