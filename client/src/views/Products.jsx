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
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sizes = ['x-small','small', 'medium', 'large', 'x-large'];

function getStyles(name, personName, theme) {
	return {
	  fontWeight:
		personName.indexOf(name) === -1
		  ? theme.typography.fontWeightRegular
		  : theme.typography.fontWeightMedium,
	};
}

const Products = (props) => {
	const theme = useTheme();
	const { category } = useParams();
	const [ sortingCategory, setSortingCategory ] = useState('');
	const [ selectedSizes, setSelectedSizes ] = useState([]);

	const handleSortCategoryChange = (event) => {
    	setSortingCategory(event.target.value)
  	};

	const handleFilterSizeChange = (event) => {
		const { target: { value } } = event;
		setSelectedSizes(
			typeof value === 'string' ? value.split(',') : value
		)
	}
	return(
		<>
      		<Navbar />
      		<Container maxWidth="xl">
        		{/* Header */}
				<Box sx={{ marginX: 4, marginY: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="h4">{ category.toUpperCase() }</Typography>
					<Box sx={{ display: 'flex', gap: '25px'}}>
						{/* Filter Menu */}
						<FormControl sx={{ width: 200 }}>
							<InputLabel id="filter-size-label">Sizes</InputLabel>
							<Select 
								labelId="filter-size-label"
								id="filter-size"
								multiple
								value={selectedSizes}
								onChange={handleFilterSizeChange}
								input={<OutlinedInput label="Size" />}
								MenuProps={MenuProps}
							>
								{sizes.map((size) => (
									<MenuItem
										key={size}
										value={size}
										style={getStyles(size, selectedSizes, theme)}
									>
										{size}
									</MenuItem>
								))
								}
							</Select>
						</FormControl>
						{/* Sort Menu */}
						<FormControl sx={{ width: 200 }}>
							<InputLabel id="sort-by-label">Sort By</InputLabel>
							<Select
								labelId="sort-by-label"
								id="sort-by"
								value={sortingCategory}
								label="Sort By"
								onChange={handleSortCategoryChange}
							>
								<MenuItem value={'default'}>Default</MenuItem>
								<MenuItem value={'featured'}>Featured</MenuItem>
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