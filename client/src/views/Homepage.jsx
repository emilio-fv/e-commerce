import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productImage from "../images/blue-t-shirt.jpg"
import { Box, Container, Typography, Stack, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

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
                        <CardMedia />
                        <CardContent>
                          <Typography gutterBottom variant="h6">{ category }</Typography>
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
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3, md: 15 }}>
              {
                ExampleProducts.map((product) => (
                  <Card>
                    <CardActionArea>
                      <CardMedia 
                        component="img"
                        alt="Product image"
                        height="160"
                        src={ productImage } 
                      />
                      <CardContent>
                        <Typography>{ product.name }</Typography>
                        <Typography>${ product.price }</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
              ))}
            </Stack>
          </Container>
        </Box>
        {/* Sale Banner */}
        <div>
          <Container maxWidth="lg">
            <img src="" alt="Sale Banner" />
          </Container>
        </div>
      </main>
      <Footer />
    </>

  )
}
export default Homepage;