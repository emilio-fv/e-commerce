import React from 'react';
import Navbar from '../components/Navbar';
import HomepageBanner from '../components/HomepageBanner';
import FeaturedDisplay from '../components/FeaturedDisplay';
import ProductCategoriesDisplay from '../components/ProductCategoriesDisplay';
import Footer from '../components/Footer';

const Homepage = (props) => {
  return(
    <>
      <Navbar />
      <HomepageBanner />
      <FeaturedDisplay />
      <ProductCategoriesDisplay />
      <Footer />
    </>

  )
}
export default Homepage;