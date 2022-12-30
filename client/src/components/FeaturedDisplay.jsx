import React from "react";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";

const FeaturedDisplay = (props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        marginY: '50px',
                        textAlign: 'center'
                    }}
                >
                    Featured
                </Typography>
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexFlow: 'wrap',
                        gap: 2
                    }}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>
            </Container>
        </>
    )
}

export default FeaturedDisplay;