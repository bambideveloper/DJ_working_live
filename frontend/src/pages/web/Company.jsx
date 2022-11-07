import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Link } from '@mui/material';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTheme } from '@mui/material/styles';

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

const Company = () => {
    const theme = useTheme();

    return (
        <StyledContainer>
            <Box sx={{ borderBottom: '1px solid #EEEEEE', pb: 5 }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', mb: 4 }}><KeyboardArrowLeftIcon color="text" sx={{ mr: 2 }} />Back</Typography>
                    <Typography variant="h5" sx={{ color: '#888888', mb: 3, textTransform: 'uppercase' }}>Completed</Typography>
                    <Typography variant="h3" sx={{ mb: 2 }}>Company product reviews (Title of Meeting)</Typography>
                    <Typography variant="h5" sx={{ color: '#888888', mb: 2 }}>Meeting ID: 393836350987</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', letterSpacing: '2px', fontWeight: 500 }}>
                            <CalendarTodayIcon sx={{ color: 'rgba(0,0,0,0.5)', width: '24px', height: '24px' }} />&ensp;09 November 2021
                        </Typography>
                        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', letterSpacing: '2px', fontWeight: 500, ml: 8 }}>
                            <QueryBuilderIcon sx={{ color: 'rgba(0,0,0,0.5)', width: '24px', height: '24px' }} />&ensp;04:00 PM (America/New_York)
                        </Typography>
                    </Box>
                </Grid>
            </Box>

            <Box sx={{ borderBottom: '1px solid #EEEEEE', py: 5 }}>
                <Grid container columnSpacing={2} sx={{ mb: 3 }}>
                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h3">Total sales overview</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <StyledPanel>
                            <Box sx={{ backgroundColor: '#A83560', display: 'inline-block', padding: '12px', borderRadius: '10px', lineHeight: '0' }}>
                                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="9.5" width="5" height="18" fill="white" />
                                    <rect x="0.5" y="27" width="25" height="2" fill="white" />
                                    <rect x="10.5" y="5.5" width="5" height="22" fill="white" />
                                    <rect x="18.5" y="0.5" width="5" height="27" fill="white" />
                                </svg>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                <Typography variant="h4" sx={{ mb: 1 }}>Amount sold</Typography>
                                <Typography variant="h2" color="primary">$1,578.08</Typography>
                            </Box>
                        </StyledPanel>
                    </Grid>
                    <Grid item md={6}>
                        <StyledPanel>
                            <Box sx={{ backgroundColor: '#A83560', display: 'inline-block', padding: '12px', borderRadius: '10px', lineHeight: '0' }}>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_24_798)">
                                        <path d="M12.5003 29.3337C13.2367 29.3337 13.8337 28.7367 13.8337 28.0003C13.8337 27.2639 13.2367 26.667 12.5003 26.667C11.7639 26.667 11.167 27.2639 11.167 28.0003C11.167 28.7367 11.7639 29.3337 12.5003 29.3337Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M27.1663 29.3337C27.9027 29.3337 28.4997 28.7367 28.4997 28.0003C28.4997 27.2639 27.9027 26.667 27.1663 26.667C26.43 26.667 25.833 27.2639 25.833 28.0003C25.833 28.7367 26.43 29.3337 27.1663 29.3337Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.83301 1.33301H7.16634L10.7397 19.1863C10.8616 19.8002 11.1956 20.3516 11.6831 20.7441C12.1706 21.1365 12.7806 21.345 13.4063 21.333H26.3663C26.9921 21.345 27.6021 21.1365 28.0896 20.7441C28.5771 20.3516 28.9111 19.8002 29.033 19.1863L31.1663 7.99968H8.49967" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_24_798">
                                            <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                <Typography variant="h4" sx={{ mb: 1 }}>Total Number of Products sold</Typography>
                                <Typography variant="h2" color="primary">3532</Typography>
                            </Box>
                        </StyledPanel>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ py: 5 }}>
                <Grid container rowSpacing={2}>
                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h3">Products</Typography>
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

export default Company;