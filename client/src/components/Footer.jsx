import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material"

export default function Footer() {
    return (
        <footer>
            <Box bgcolor="#1976D2" color="white" sx={{ py: '3rem'}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5} >
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Typography variant="h6">Products</Typography>
                            </Box>
                            <Box>
                                <Link href="/products/unisex" color="inherit">Unisex</Link>
                            </Box>
                            <Box>
                                <Link href="/products/women" color="inherit">Women</Link>
                            </Box>
                            <Box>
                                <Link href="/products/men" color="inherit">Men</Link>
                            </Box>
                            <Box>
                                <Link href="/products/sale" color="inherit">Sale</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Typography variant="h6">Support</Typography>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Customer Support</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">FAQ</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Shipping & Handling</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Returns & Exchanges</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Typography variant="h6">Company Info</Typography>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">About Us</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Careers</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}