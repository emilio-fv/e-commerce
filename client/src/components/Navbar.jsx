import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const [ anchorNav, setAnchorNav ] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (e) => {
      setAnchorNav(e.currentTarget);
    };

    const handleProductLinkClick = (e, category) => {
        setAnchorNav(null);
        navigate(`/products/${category}`);
    };

    const handleAccountClick = (e) => {
        navigate('/account');
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop: Logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
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
                            aria-label="menu of product categories"
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
                            onClose={handleProductLinkClick}
                            sx={{
                                display: { xs: "block", md: "none"}
                            }}
                        >
                            <MenuItem onClick={e => handleProductLinkClick(e, 'women')}>
                                    <Typography textAlign="center">Women</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductLinkClick(e, 'men')}>
                                    <Typography textAlign="center">Men</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductLinkClick(e, 'unisex')}>
                                    <Typography textAlign="center">Unisex</Typography>
                            </MenuItem>
                            <MenuItem onClick={e => handleProductLinkClick(e, 'sale')}>
                                    <Typography textAlign="center">Sale</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Mobile: Logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
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

                    {/* Desktop: Product Category Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
                        <Button
                            onClick={e => handleProductLinkClick(e, 'women')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Women
                        </Button>
                        <Button
                            onClick={e => handleProductLinkClick(e, 'men')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Men
                        </Button>
                        <Button
                            onClick={e => handleProductLinkClick(e, 'unisex')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Unisex
                        </Button>
                        <Button
                            onClick={e => handleProductLinkClick(e, 'sale')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Sale
                        </Button>
                    </Box>

                    {/* Desktop/Mobile: Icons */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Account">
                            <IconButton onClick={handleAccountClick}>
                                <AccountCircleOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Favorites">
                            <IconButton>  
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Shopping Cart">
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