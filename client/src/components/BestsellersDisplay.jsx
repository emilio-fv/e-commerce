import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import ClothingPic from '../images/blue-t-shirt.jpg';

const BestsellersDisplay = (props) => {
    return (
        <>
            <Container maxWidth="xl">
                <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                        marginY: '50px',
                        textAlign: 'center'
                    }}
                >
                    Bestsellers
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia 
                                sx={{
                                    height: 250
                                }}
                                image={ ClothingPic }
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Product Name
                                </Typography>
                                <Typography component='p'>
                                    $24.99
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', marginX: 1 }}>
                                <Button variant="contained" sx={{ width: '100%' }}>Add to Cart</Button>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia 
                                sx={{
                                    height: 250
                                }}
                                image={ ClothingPic }
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Product Name
                                </Typography>
                                <Typography component='p'>
                                    $24.99
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', marginX: 1 }}>
                                <Button variant="contained" sx={{ width: '100%' }}>Add to Cart</Button>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia 
                                sx={{
                                    height: 250
                                }}
                                image={ ClothingPic }
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Product Name
                                </Typography>
                                <Typography component='p'>
                                    $24.99
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', marginX: 1 }}>
                                <Button variant="contained" sx={{ width: '100%' }}>Add to Cart</Button>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia 
                                sx={{
                                    height: 250
                                }}
                                image={ ClothingPic }
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Product Name
                                </Typography>
                                <Typography component='p'>
                                    $24.99
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', marginX: 1 }}>
                                <Button variant="contained" sx={{ width: '100%' }}>Add to Cart</Button>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default BestsellersDisplay;