import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productImage from "../images/blue-t-shirt.jpg"
import { Box, Container, Typography, Stack, Card, CardActionArea, CardContent, CardMedia, CssBaseline } from '@mui/material';

const Categories = ['Unisex', 'Women', 'Men', 'Sale'];
const ExampleProducts = [
  {
    name: "Product 1",
    price: 10.99,
    src: "../images/blue-t-shirt.jpg"
  },
  {
    name: "Product 2",
    price: 10.99
  },
  {
    name: "Product 3",
    price: 10.99
  },
  {
    name: "Product 4",
    price: 10.99
  },
  {
    name: "Product 5",
    price: 10.99
  }
];

const Homepage = (props) => {
  return(
    <>
    <CssBaseline/>
      <Navbar />
      <main>
{/* TODO: Opening banner */}
{/* Shop By Category */}
        <Box sx={{ my: '3rem' }}>
          <Container maxWidth="sm">
              <Box sx={{ mb: '1rem' }}>
                <Typography variant="h6" align="center">Shop By Category</Typography>
              </Box>
              <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3, md: 9 }}>
                {
                  Categories.map((category) => (
                    <Card>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h6" sx={{ mt: '5px' }}>{ category }</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                ))}
              </Stack>
          </Container>
        </Box>
{/* Bestsellers */}
        <Box sx={{ my: '3rem' }}>
          <Container maxWidth="lg">
            <Box sx={{ mb: '1rem' }}>
              <Typography variant="h6" align="center">Bestsellers</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
              {
                ExampleProducts.map((product) => (
                  <Card>
                    <CardActionArea>
                      <CardMedia 
                        component="img"
                        alt="Product image"
                        height="210"
                        src={ productImage } 
                      />
                      <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography>{ product.name }</Typography>
                        <Typography>${ product.price }</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
              ))}
            </Box>
          </Container>
        </Box>
{/* Sale Banner */}
        <Box sx={{ bgcolor: '#0b3157', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', my: '7rem'}}>
          <Typography gutterBottom='true' variant="h3" sx={{ color: 'white' }}>SALE</Typography>
        </Box>

      </main>
      <Footer />
    </>

  )
}
export default Homepage;