import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
export default function Main() {
  return (
    <>
      <Layout>
        <AppRoutes />
        <Footer />
      </Layout>
    </>
  );
}
