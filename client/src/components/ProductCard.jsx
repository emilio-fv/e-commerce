import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClothingPic from '../images/blue-t-shirt.jpg';

const ProductCard = (props) => {
    return (
        <>
            <Card sx={{ width: 250 }}>
                <CardMedia sx={{ height: 250 }} image={ ClothingPic }/>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: -1
                        }}
                    >
                        <Typography variant='h6' component='p'>
                            Product Name
                        </Typography>
                        <Typography component='p'>
                            $24.99
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', mb: 1 }}>
                    <Button variant="contained" sx={{ width: '100%' }}>Add to Cart</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default ProductCard;