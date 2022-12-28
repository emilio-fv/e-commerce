import React from "react";
import Navbar from "../components/Navbar";
import HomepageBanner from "../components/HomepageBanner";
import Footer from "../components/Footer";
import { CssBaseline } from '@mui/material';
import BestsellersDisplay from "../components/BestsellersDisplay";
import ProductCategoriesDisplay from "../components/ProductCategoriesDisplay";

const Homepage = (props) => {
  return(
    <>
      <CssBaseline/>
      <Navbar />
      <HomepageBanner />
      <BestsellersDisplay />
      <ProductCategoriesDisplay />
      <Footer />
    </>

  )
}
export default Homepage;