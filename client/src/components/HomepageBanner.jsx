import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ClothingBannerImg from '../images/banner.png';

const HomepageBanner = (props) => {
    return (
        <>
            <Container disableGutters maxWidth="xl">
                <Paper elevation={0}>
                    <img src={ClothingBannerImg} alt="Homepage clothing display" className='BannerImg'/>
                </Paper>
            </Container>
        </>
    )
}

export default HomepageBanner;