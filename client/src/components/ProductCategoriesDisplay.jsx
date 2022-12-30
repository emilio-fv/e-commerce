import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from "react";
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const ProductCategoriesDisplay = (props) => {
    const navigate = useNavigate();

    const handleClick = (e, category) => {
        navigate(`/products/${category}`);
    }

    return (
        <>
            <Container maxWidth="lg"
                sx={{ mb: '50px' }}
            >
                <Typography 
                    variant="h4"
                    component="h2"
                    sx={{
                        marginY: '50px',
                        textAlign: 'center'
                    }}
                >
                    Shop By Category
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexFlow: 'wrap',
                        gap: 2
                    }}
                >
                    <Paper elevation={4}>
                        <Button
                            variant='text'
                            size='large'
                            sx={{
                                width: 250,
                                height: 250,
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: 'normal'
                            }}
                            onClick={e => handleClick(e,"women")}
                        >
                            Women
                        </Button>
                    </Paper>
                    <Paper elevation={4}>
                        <Button
                            variant='text'
                            size='large'
                            sx={{
                                width: 250,
                                height: 250,
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: 'normal'
                            }}
                            onClick={e => handleClick(e,"")}
                        >
                            Men
                        </Button>
                    </Paper>
                    <Paper elevation={4}>
                        <Button
                            variant='text'
                            size='large'
                            sx={{
                                width: 250,
                                height: 250,
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: 'normal'
                            }}
                            onClick={e => handleClick(e,"unisex")}
                        >
                            Unisex
                        </Button>
                    </Paper>
                    <Paper elevation={4}>
                        <Button
                            variant='text'
                            size='large'
                            sx={{
                                width: 250,
                                height: 250,
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: 'normal'
                            }}
                            onClick={e => handleClick(e,"sale")}
                        >
                            Sale
                        </Button>
                    </Paper>
                </Box>
            </Container>
            
        </>
    )
}

export default ProductCategoriesDisplay;