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
    <div>
      <Head>{pageTitle}</Head>
      <>
        <Navbar currentPage={currentPage} />
        <div>{children}</div>
        <Footer />
      </>
    </div>
  );
}

export default Layout;
