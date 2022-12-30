import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from "../components/Footer";
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from "react-router-dom";

const Products = (props) => {
	const { category } = useParams();
	console.log(category);
	
	const [ sortingCategory, setSortingCategory ] = useState('');
	const [ products, setProducts ] = useState([]);

	const handleSortCategoryChange = (event) => {
    	setSortingCategory(event.target.value)
  	};

	return(
		<>
      		<Navbar />
      		<Container maxWidth="xl">
        		{/* Header */}
				<Box sx={{ marginX: 4, marginY: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="h4">Product Category</Typography>
					<Box sx={{ display: 'flex', gap: '25px'}}>
						{/* Filter Menu */}
						{/* Sort Menu */}
						<FormControl sx={{ width: 200 }}>
							<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={sortingCategory}
								label="Sort By"
								onChange={handleSortCategoryChange}
							>
								<MenuItem value={'default'}>Featured</MenuItem>
								<MenuItem value={'priceAsc'}>Price: Low to High</MenuItem>
								<MenuItem value={'priceDesc'}>Price: High to Low</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box> 
				{/* TODO: Add products display */}
      		</Container>
      <Footer />
    </>
  	)
}
export default Products;