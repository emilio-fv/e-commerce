import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClothingBannerImg from '../images/model.jpg';

const HomepageBanner = (props) => {
    return (
        <>
            <Container disableGutters maxWidth="xl" sx={{ mt: 8, mb: 10,display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography textAlign='center' variant='h3' sx={{ mb: 3 }}>
                        Luxury.<br/>
                        Modern.<br/>
                        Minimalist.<br/>
                    </Typography>
                    <Button>
                        TODO: SHOP NOW
                    </Button>
                </Box>

                <img src={ClothingBannerImg} alt="Homepage clothing display" className='BannerImg'/>
            </Container>
        </>
    )
}

export default HomepageBanner;