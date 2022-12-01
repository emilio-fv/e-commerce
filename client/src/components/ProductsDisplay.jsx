import React from "react";
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import productImage from "../images/blue-t-shirt.jpg"

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
    },
    {
      name: "Product 5",
      price: 10.99
    },
    {
      name: "Product 5",
      price: 10.99
    },
    {
      name: "Product 5",
      price: 10.99
    },
    {
      name: "Product 5",
      price: 10.99
    }
  ];

const ProductsDisplay = (props) => {
  return(
    <>
        <Box sx={{ mr: '2rem', mb: '2rem' }}>
            <Box sx={{ my: '2rem' }}>
                <Typography variant="h4" align="center">Product Category</Typography>
            </Box>
            <Grid container spacing={4}>
                {
                    ExampleProducts.map((product, index) => (
                        <Grid item md={3} key={index}>
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
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    </>
  )
}
export default ProductsDisplay ;