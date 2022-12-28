import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from "react";

const ProductCategoriesDisplay = (props) => {
    return (
        <>
            <Typography 
                variant='h4'   
                component='div' 
                sx={{ 
                    marginY: '50px', 
                    textAlign: 'center' 
                }}
            >
                Shop By Category
            </Typography>
            <Container maxWidth="lg" sx={{ marginBottom: '50px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Card sx={{
                            paddingY: '75px'
                        }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    textAlign: 'center'
                                }}
                            >
                                Women
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            paddingY: '75px'
                        }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    textAlign: 'center'
                                }}
                            >
                                Men
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            paddingY: '75px'
                        }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    textAlign: 'center'
                                }}
                            >
                                Unisex
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            paddingY: '75px'
                        }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    textAlign: 'center'
                                }}
                            >
                                Sale
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProductCategoriesDisplay;