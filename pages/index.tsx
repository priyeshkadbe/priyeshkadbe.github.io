import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomePage/index.";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout currentPage="Home">
      <HomePage />
    </Layout>
  );
};

export default Home;
