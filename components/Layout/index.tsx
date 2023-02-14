import Head from "next/head";
import Navbar from "../Navbar";
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
    <>
      <Head>{pageTitle}</Head>
      <div >
        <Navbar currentPage={currentPage} />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
