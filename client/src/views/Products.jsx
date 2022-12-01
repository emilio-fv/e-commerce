import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";
import ProductsDisplay from "../components/ProductsDisplay";
import { CssBaseline, Grid } from '@mui/material';

const Products = (props) => {
  return(
    <>
      <CssBaseline />
      <Navbar />
      <main>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FilterMenu />
            </Grid>
            <Grid item xs={9}>
              <ProductsDisplay />
            </Grid>
          </Grid>
      </main>
      <Footer />
    </>
  )
}
export default Products;