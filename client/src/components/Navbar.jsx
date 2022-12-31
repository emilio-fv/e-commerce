import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ProductCategories = ['women', 'men', 'unisex', 'sale'];

const Navbar = (props) => {
    const [ anchorNav, setAnchorNav ] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (e) => {
      setAnchorNav(e.currentTarget);
    };

    // Navbar product category links click event handlers
    const handleProductCategoryLinkClick = (e, category) => {
        setAnchorNav(null);
        if (category === undefined) {
            navigate('/');
        } else {
            navigate(`/products/${category}`);
        }
    };

    // Navbar icon click event handlers
    const handleAccountIconClick = (e) => {
        // TODO: If user logged in, navigate to user's dashboard else open log in form modal
    }

    const handleFavoritesIconClick = (e) => {
        console.log("favorites icon clicked");
        // TODO: If user logged in, navigate to their favorites else navigate to login form
    }

    const handleShoppingCartIconClick = (e) => {
        console.log("shopping cart icon clicked")
        // TODO: Navigate to shopping cart
    }
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop: Logo ✅ */}
                    <Typography variant="h6" noWrap component="a" href='/'
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        VESTA
                    </Typography>
                    

                    {/* Mobile: Product Category Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"} }}>
                        <IconButton
                            size="large"
                            aria-label="Menu of product categories"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={e => handleProductCategoryLinkClick(e)}
                            sx={{
                                display: { xs: "block", md: "none"}
                            }}
                        >
                            <MenuItem onClick={e => handleProductCategoryLinkClick(e, 'women')}>
                                    <Typography textAlign="center">Women</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductCategoryLinkClick(e, 'men')}>
                                    <Typography textAlign="center">Men</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductCategoryLinkClick(e, 'unisex')}>
                                    <Typography textAlign="center">Unisex</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductCategoryLinkClick(e, 'sale')}>
                                    <Typography textAlign="center">Sale</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Mobile: Logo ✅ */}
                    <Typography variant="h6" noWrap component="a" href="/"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        VESTA
                    </Typography>

                    {/* Desktop: Product Category Links ✅ */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
                        {ProductCategories.map((category, key) => (
                            <Button
                                key={key}
                                onClick={e => handleProductCategoryLinkClick(e, category)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {category}
                            </Button>
                        ))}
                    </Box>

                    {/* Desktop/Mobile: Icons ✅ */} 
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Account">
                            <IconButton onClick={e => handleAccountIconClick(e)}>
                                <AccountCircleOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Favorites" onClick={e => handleFavoritesIconClick(e)}>
                            <IconButton>  
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Shopping Cart" onClick={e => handleShoppingCartIconClick(e)}>
                            <IconButton>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
} 

export default Navbar;