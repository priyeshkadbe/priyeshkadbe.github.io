import Layout from "../components/Layout";
import Hero from "../components/Contact/Hero";
import Globe from "../components/Contact/Globe";
function contact() {
  return (
    <div>
      <Layout currentPage="Contact">
        <Hero />
      </Layout>
    </div>
  );
}

export default contact;
