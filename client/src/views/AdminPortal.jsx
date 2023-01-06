import React from "react";
import Navbar from "../components/Navbar";
import AdminDashboard from "../components/AdminDashboard";
import Footer from "../components/Footer";

const AdminPortal = (props) => {
  return(
    <>
        <Navbar />
        <AdminDashboard />
        <Footer />
    </>
  )
}
export default AdminPortal ;

