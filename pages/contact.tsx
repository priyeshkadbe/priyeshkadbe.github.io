import Layout from "../components/Layout";
import ContactPage from "../components/ContactPage"
import Globe from "../components/ContactPage/Globe";
function contact() {
  return (
    <div>
      <Layout currentPage="Contact">
        <ContactPage />
      </Layout>
    </div>
  );
}

export default contact;
