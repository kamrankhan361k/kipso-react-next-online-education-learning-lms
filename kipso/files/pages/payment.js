import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Payment from "../components/Payment";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Layout pageTitle="Kipso | Payment Page">
      <NavOne />
      <PageHeader title="Payment" />
      <Payment />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
