import Head from "next/head";

import Laptop from "../Navbar/Laptop";
import Mobile from "../Navbar/Mobile";
import Footer from "../Footer";
type Props = {
  children: React.ReactNode;
  currentPage: string;
};

function Layout({ children, currentPage }: Props) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Priyesh Kadbe | Portfolio"
      : `Priyesh Kadbe | ${currentPage} `
  }`;

  return (
    < >
      <Head>{pageTitle}</Head>
      <main >
        <div className="hidden md:block z-100">
          <Laptop currentPage={currentPage} />
        </div>
        {/* <div className="-m-5 block md:hidden z-100">
          <Mobile />
        </div> */}
        <div className="min-h-screen">
        {children}
        </div>
       <div className="" style={{maxWidth: '100%'}}>
       <Footer />
       </div>
      </main>
    </>
  );
}

export default Layout;
