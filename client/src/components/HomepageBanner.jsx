import { Card, CardMedia, Container, Typography } from "@mui/material";
import ClothingBannerImg from "../images/homepage-banner.jpg"
import React from "react";

const HomepageBanner = (props) => {
    return (
        <>
            <Container disableGutters maxWidth="xl">
                <Card sx={{
                    position: 'relative'
                }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            position: 'absolute',
                            top: '15vh',
                            left: '5vw',
                            fontSize: { sm: '2rem', md: '3rem'}
                        }}
                    >
                        Shop Italy's #1 Retailer
                    </Typography>
                    <CardMedia 
                        sx={{
                            height: "90vh"
                        }}
                        image={ ClothingBannerImg }
                    />
                </Card>
            </Container>
        </>
    )
}

export default HomepageBanner;