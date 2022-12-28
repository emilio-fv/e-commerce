<Container disableGutters maxWidth="xl"
sx={{
    position: 'relative'
}}
>
{/* Desktop Text */}
<Typography
    variant="h3"
    component="h1"
    sx={{
        position: "absolute",
        top: '15vh',
        left: '6vw',
        display: { xs: "none", md: "flex" }
    }}
>
    Shop Italy's #1 Retailer
</Typography>

<Typography
    variant="h4"
    component="h1"
    sx={{
        position: "absolute",
        top: '10vh',
        left: '6vw',
        display: { xs: "none", sm: "flex", md: "none" }
    }}
>
    Shop Italy's #1 Retailer
</Typography>

<Typography
    variant="h6"
    component="h1"
    sx={{
        position: "absolute",
        top: '2vh',
        left: '6vw',
        display: { xs: "flex", sm: "none" }
    }}
>
    Shop Italy's #1 Retailer
</Typography>

<Box 
    component="img"
    sx={{
        width: 1,
        // minWidth: 
    }}
    alt="Clothing homepage banner"
    src={ClothingBannerImg}
/>
</Container>