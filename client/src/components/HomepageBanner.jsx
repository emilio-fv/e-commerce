import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ClothingBannerImg from "../images/banner.png"
import React from "react";


const HomepageBanner = (props) => {
    return (
        <>
            <Container disableGutters maxWidth="xl">
                <Paper elevation={0} sx={{ position: 'relative' }}>
                    <img src={ClothingBannerImg} alt="Homepage clothing display" className='BannerImg'/>
                </Paper>
            </Container>
        </>
    )
}

export default HomepageBanner;