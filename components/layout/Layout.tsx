import React, { ReactChildren } from "react";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};

function Layout({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Priyesh Kadbe - Web Developer, Designer, Creator."
      : `${currentPage} - priyeshkadbe.github.io`
  }`;
  console.log(currentPage);
  return (
    // <div
    //   className="w-full m-auto flex flex-col items-center justify-center min-h-screen  text-white overflow-hidden md:overflow-visible"
    //   style={{ maxWidth: "1200px" }}
    // >
    //   <main className="p-5 w-full flex-1 text-center">
    //     <div className="hidden sm:block z-100">
    //       {/* <Navbar currentPage={currentPage} /> */}
    //       <h1>hello</h1>
    //     </div>
    //     <div className="-m-5 block sm:hidden z-100">
    //       {/* <MobileNavbar /> */}
    //     </div>
    //     {children}
    //   </main>
    //   {/* <Footer /> */}
    // </div>
    <div>
      {children}
    </div>
  );
}

export default Layout;
