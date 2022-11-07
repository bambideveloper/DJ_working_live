import React, { useState } from 'react';
import { Box, Grid, Typography, FormControl, Link, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTheme } from '@mui/material/styles';

import WKInput from "@components/Base/WKInput";

const StyledContainer = styled(Box)(({ theme }) => ({
    boxShadow: theme.custom.boxShadow,
    padding: '40px'
}));

const StyledPanel = styled(Box)({
    padding: '16px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center'
});

const Products = () => {
    const theme = useTheme();

    return (
        <StyledContainer>
            <Box sx={{ pb: 5 }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', mb: 4 }}><KeyboardArrowLeftIcon color="text" sx={{ mr: 2 }} />Back</Typography>
                    <hr style={{ border: '1px solid #EEEEEE', width: '100%' }} />
                    <Typography variant="h3" sx={{ mt: 3 }}>All products</Typography>
                    <FormControl variant="standard" size="small" fullWidth={true} sx={{ mt: 3 }}>
                        <InputLabel shrink htmlFor="meeting-topic" sx={{ ...theme.typography.subtitle, fontWeight: 700 }}>
                            Search
                        </InputLabel>
                        <WKInput id="meeting-topic" size="small" />
                    </FormControl>
                </Grid>
                <Grid container rowSpacing={2} sx={{ mt: 1 }}>
                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/1.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Louison Bracelet, Blue, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$199.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1349.87</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1842</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/2.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1143.45</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1276</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/3.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Tropical Flower Pierced Earrings, Pink,<br />Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$956.76</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">984</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/1.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Louison Bracelet, Blue, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$199.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1349.87</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1842</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/2.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1143.45</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1276</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/3.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Tropical Flower Pierced Earrings, Pink,<br />Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$956.76</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">984</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/1.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Louison Bracelet, Blue, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$199.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1349.87</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1842</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/2.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$1143.45</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">1276</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>

                    <Grid item md={12}>
                        <StyledPanel>
                            <Grid container>
                                <Grid item md={7} sx={{ display: 'flex' }}>
                                    <Box>
                                        <img src="assets/images/products/3.png" width={80} height={80} style={{ borderRadius: '4px', border: '1px solid #E7E8EB' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <Typography variant="h4" sx={{ mb: 1 }}>Tropical Flower Pierced Earrings, Pink,<br />Rhodium Plated</Typography>
                                        <Typography variant="h5" sx={{ color: '#888888', mb: 1 }}>Product code: 255254984</Typography>
                                        <Typography variant="h3" sx={{ color: '#000' }}>$89.00</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center', borderLeft: '1px solid #EEEEEE', my: 2 }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total amount</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">$956.76</Typography>
                                </Grid>
                                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 1, color: '#888888', fontWeight: '400', textAlign: 'right' }}>Total Number of sales</Typography>
                                    <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.secondary">984</Typography>
                                </Grid>
                            </Grid>
                        </StyledPanel>
                    </Grid>
                </Grid>
            </Box>

            <Link color="primary" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', '& svg': { color: theme.palette.primary.main } }}><KeyboardArrowDownIcon />&ensp;Load More</Link>
        </StyledContainer>
    )
}

export default Products;