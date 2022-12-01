import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, Checkbox } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterMenu = (props) => {
  return(
    <>
        <Box sx={{ my: '2rem', mx: '2rem', height: '80%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FilterAltIcon fontSize="medium"/>
                <Typography variant="h5">Filter</Typography>
            </Box>
            <form action="">
                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontWeight: 'bold' }}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="unisex"/>
                                }
                                label="Unisex"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="women"/>
                                }
                                label="Women"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="men"/>
                                }
                                label="Men"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="sale"/>
                                }
                                label="Sale"
                            />
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontWeight: 'bold' }}>Size</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="x-large"/>
                                }
                                label="X-Large"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="large"/>
                                }
                                label="Large"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="medium"/>
                                }
                                label="Medium"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="small"/>
                                }
                                label="Small"
                            />
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontWeight: 'bold' }}>Color</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="black"/>
                                }
                                label="Black"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="white"/>
                                }
                                label="White"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="grey"/>
                                }
                                label="Grey"
                            />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox name="red"/>
                                }
                                label="Red"
                            />
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </form>
        </Box>
    </>
  )
}
export default FilterMenu ;