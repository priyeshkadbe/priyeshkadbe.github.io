import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/HomePage/Hero";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout currentPage="Home">
      <Hero />
    </Layout>
  );
};

export default Home;
