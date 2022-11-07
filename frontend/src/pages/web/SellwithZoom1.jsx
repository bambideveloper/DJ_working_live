import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { styled } from '@mui/system';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GroupIcon from '@mui/icons-material/Group';
import { useTheme } from '@mui/material/styles';

import NewMeeting from "@components/SellwithZoom/NewMeeting";
import AddAffiliate from "@components/SellwithZoom/AddAffiliate";
import AffiliatesList from "@components/SellwithZoom/AffiliatesList";
import WKTextField from "@components/Base/WKTextField";
import WKPanel from "@components/Base/WKPanel";
import WKContentWrapper from "@components/Base/WKContentWrapper";

const SellwithZoom = (props) => {
  const theme = useTheme();
  const [isNewMeetingOpened, setIsNewMeetingOpened] = useState(false);
  const [isAddAffiliateOpened, setIsAddAffiliateOpened] = useState(false);
  const [isAffiliatesListOpened, setIsAffiliatesListOpened] = useState(false);
  const [dateValue, setDateValue] = useState([null, null]);
  
  const handleNewMeeting = state => () => {
    setIsNewMeetingOpened(state);
  }

  const handleAddAffiliate = state => () => {
    setIsAddAffiliateOpened(state);
  }

  const handleAffiliatesList = state => () => {
    setIsAffiliatesListOpened(state);
  }

  return (
    <WKContentWrapper>
      <Box sx={{ borderBottom: '1px solid #EEEEEE', pb: 5 }}>
        <Grid container columnSpacing={2} sx={{ mb: 3 }}>
          <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3">Total sales overview</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  value={dateValue}
                  onChange={(newDateValue) => {
                    setDateValue(newDateValue);
                  }}
                  renderInput={(params) => <WKTextField {...params} size='small' />}
                />
                &ensp;-&ensp;
                <DatePicker
                  value={dateValue}
                  onChange={(newDateValue) => {
                    setDateValue(newDateValue);
                  }}
                  renderInput={(params) => <WKTextField {...params} size='small' />}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item md={6}>
            <WKPanel>
              <Box sx={{ backgroundColor: '#A83560', display: 'inline-block', padding: '12px', borderRadius: '10px', lineHeight: '0' }}>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_24_798)">
                    <path d="M12.5003 29.3337C13.2367 29.3337 13.8337 28.7367 13.8337 28.0003C13.8337 27.2639 13.2367 26.667 12.5003 26.667C11.7639 26.667 11.167 27.2639 11.167 28.0003C11.167 28.7367 11.7639 29.3337 12.5003 29.3337Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.1663 29.3337C27.9027 29.3337 28.4997 28.7367 28.4997 28.0003C28.4997 27.2639 27.9027 26.667 27.1663 26.667C26.43 26.667 25.833 27.2639 25.833 28.0003C25.833 28.7367 26.43 29.3337 27.1663 29.3337Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.83301 1.33301H7.16634L10.7397 19.1863C10.8616 19.8002 11.1956 20.3516 11.6831 20.7441C12.1706 21.1365 12.7806 21.345 13.4063 21.333H26.3663C26.9921 21.345 27.6021 21.1365 28.0896 20.7441C28.5771 20.3516 28.9111 19.8002 29.033 19.1863L31.1663 7.99968H8.49967" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_24_798">
                      <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>Total Number of Products sold</Typography>
                  <Typography variant="h2" color="primary">32</Typography>
              </Box>
            </WKPanel>
          </Grid>
          <Grid item md={6}>
            <WKPanel>
              <Box sx={{ backgroundColor: '#A83560', display: 'inline-block', padding: '12px', borderRadius: '10px', lineHeight: '0' }}>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="9.5" width="5" height="18" fill="white"/>
                  <rect x="0.5" y="27" width="25" height="2" fill="white"/>
                  <rect x="10.5" y="5.5" width="5" height="22" fill="white"/>
                  <rect x="18.5" y="0.5" width="5" height="27" fill="white"/>
                </svg>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>Total Sales</Typography>
                  <Typography variant="h2" color="primary">$200</Typography>
              </Box>
            </WKPanel>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2}>
          <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h3">Top Products</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>View All Products<KeyboardArrowRightIcon color="text" /></Typography>
            </Box>
          </Grid>
          <Grid item md={12}>
            <WKPanel>
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
                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total amount</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">$1349.87</Typography>
                </Grid>
                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total Number of sales</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">1842</Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
          
          <Grid item md={12}>
            <WKPanel>
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
                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total amount</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">$1143.45</Typography>
                </Grid>
                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total Number of sales</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">1276</Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>

          <Grid item md={12}>
            <WKPanel>
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
                <Grid item md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total amount</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">$956.76</Typography>
                </Grid>
                <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, letterSpacing: '1px', textAlign: 'right' }}>Total Number of sales</Typography>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '1px', textAlign: 'right' }} color="text.primary">984</Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ borderBottom: '1px solid #EEEEEE', py: 5 }}>
        <Grid container columnSpacing={2} sx={{ mb: 3 }}>
          <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3">Upcoming meetings</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" color="primary" onClick={ handleNewMeeting(true) }>Set up Meeting</Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2}>
          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link color="text.secondary"><DeleteOutlineIcon />&ensp;Delete</Link>
                    <Link color="text.secondary" sx={{ ml: 3 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#000' }}>
                        <g>
                          <path d="M7.33301 2.6665H2.66634C2.31272 2.6665 1.97358 2.80698 1.72353 3.05703C1.47348 3.30708 1.33301 3.64622 1.33301 3.99984V13.3332C1.33301 13.6868 1.47348 14.0259 1.72353 14.276C1.97358 14.526 2.31272 14.6665 2.66634 14.6665H11.9997C12.3533 14.6665 12.6924 14.526 12.9425 14.276C13.1925 14.0259 13.333 13.6868 13.333 13.3332V8.6665" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      &ensp;Edit
                    </Link>
                    <Button variant="contained" sx={{ ml: 3, border: '1px solid #000', backgroundColor: '#fff', color: '#000', height: '40px', '&:hover, &:hover>.MuiSvgIcon-root': { color: '#fff' } }}>
                      <PlayCircleOutlineIcon sx={{ color: theme.palette.primary.main }} />&ensp;Go To Meeting
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>16 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }} onClick={handleAddAffiliate(true)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.6457 9.70271L6.29778 5.35481C6.53237 4.9578 6.66699 4.4947 6.66699 4.00016C6.66699 2.5274 5.47308 1.3335 4.00033 1.3335C2.52757 1.3335 1.33366 2.5274 1.33366 4.00016C1.33366 5.47292 2.52757 6.66683 4.00033 6.66683C4.49486 6.66683 4.95796 6.53221 5.35497 6.29762L9.70287 10.6455C9.46828 11.0425 9.33366 11.5056 9.33366 12.0002C9.33366 13.4729 10.5276 14.6668 12.0003 14.6668C13.4731 14.6668 14.667 13.4729 14.667 12.0002C14.667 10.5274 13.4731 9.3335 12.0003 9.3335C11.5058 9.3335 11.0427 9.46812 10.6457 9.70271ZM12.0003 13.3335C11.2639 13.3335 10.667 12.7365 10.667 12.0002C10.667 11.2638 11.2639 10.6668 12.0003 10.6668C12.7367 10.6668 13.3337 11.2638 13.3337 12.0002C13.3337 12.7365 12.7367 13.3335 12.0003 13.3335ZM2.66699 4.00016C2.66699 4.73654 3.26395 5.3335 4.00033 5.3335C4.7367 5.3335 5.33366 4.73654 5.33366 4.00016C5.33366 3.26378 4.7367 2.66683 4.00033 2.66683C3.26395 2.66683 2.66699 3.26378 2.66699 4.00016Z" />
                        </g>
                      </svg>
                      &ensp;Add Affiliates
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ContentCopyIcon sx={{ color: '#000' }} />&ensp;Copy Invitation
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                  <Typography variant="body1">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br />Exercitation veniam consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, cursor: 'pointer' }}><KeyboardArrowUpIcon />&ensp;Hide Description</Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
          
          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link color="text.secondary"><DeleteOutlineIcon />&ensp;Delete</Link>
                    <Link color="text.secondary" sx={{ ml: 3 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#000' }}>
                        <g>
                          <path d="M7.33301 2.6665H2.66634C2.31272 2.6665 1.97358 2.80698 1.72353 3.05703C1.47348 3.30708 1.33301 3.64622 1.33301 3.99984V13.3332C1.33301 13.6868 1.47348 14.0259 1.72353 14.276C1.97358 14.526 2.31272 14.6665 2.66634 14.6665H11.9997C12.3533 14.6665 12.6924 14.526 12.9425 14.276C13.1925 14.0259 13.333 13.6868 13.333 13.3332V8.6665" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      &ensp;Edit
                    </Link>
                    <Button variant="contained" sx={{ ml: 3, border: '1px solid #000', backgroundColor: '#fff', color: '#000', height: '40px', '&:hover, &:hover>.MuiSvgIcon-root': { color: '#fff' } }}>
                      <PlayCircleOutlineIcon sx={{ color: theme.palette.primary.main }} />&ensp;Go To Meeting
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>17 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }} onClick={handleAddAffiliate(true)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.6457 9.70271L6.29778 5.35481C6.53237 4.9578 6.66699 4.4947 6.66699 4.00016C6.66699 2.5274 5.47308 1.3335 4.00033 1.3335C2.52757 1.3335 1.33366 2.5274 1.33366 4.00016C1.33366 5.47292 2.52757 6.66683 4.00033 6.66683C4.49486 6.66683 4.95796 6.53221 5.35497 6.29762L9.70287 10.6455C9.46828 11.0425 9.33366 11.5056 9.33366 12.0002C9.33366 13.4729 10.5276 14.6668 12.0003 14.6668C13.4731 14.6668 14.667 13.4729 14.667 12.0002C14.667 10.5274 13.4731 9.3335 12.0003 9.3335C11.5058 9.3335 11.0427 9.46812 10.6457 9.70271ZM12.0003 13.3335C11.2639 13.3335 10.667 12.7365 10.667 12.0002C10.667 11.2638 11.2639 10.6668 12.0003 10.6668C12.7367 10.6668 13.3337 11.2638 13.3337 12.0002C13.3337 12.7365 12.7367 13.3335 12.0003 13.3335ZM2.66699 4.00016C2.66699 4.73654 3.26395 5.3335 4.00033 5.3335C4.7367 5.3335 5.33366 4.73654 5.33366 4.00016C5.33366 3.26378 4.7367 2.66683 4.00033 2.66683C3.26395 2.66683 2.66699 3.26378 2.66699 4.00016Z" />
                        </g>
                      </svg>
                      &ensp;Add Affiliates
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ContentCopyIcon sx={{ color: '#000' }} />&ensp;Copy Invitation
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                  <Typography variant="body1">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br />Exercitation veniam consequat. 
                  </Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>

          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link color="text.secondary"><DeleteOutlineIcon />&ensp;Delete</Link>
                    <Link color="text.secondary" sx={{ ml: 3 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#000' }}>
                        <g>
                          <path d="M7.33301 2.6665H2.66634C2.31272 2.6665 1.97358 2.80698 1.72353 3.05703C1.47348 3.30708 1.33301 3.64622 1.33301 3.99984V13.3332C1.33301 13.6868 1.47348 14.0259 1.72353 14.276C1.97358 14.526 2.31272 14.6665 2.66634 14.6665H11.9997C12.3533 14.6665 12.6924 14.526 12.9425 14.276C13.1925 14.0259 13.333 13.6868 13.333 13.3332V8.6665" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      &ensp;Edit
                    </Link>
                    <Button variant="contained" sx={{ ml: 3, border: '1px solid #000', backgroundColor: '#fff', color: '#000', height: '40px', '&:hover, &:hover>.MuiSvgIcon-root': { color: '#fff' } }}>
                      <PlayCircleOutlineIcon sx={{ color: theme.palette.primary.main }} />&ensp;Go To Meeting
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>18 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }} onClick={handleAddAffiliate(true)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.6457 9.70271L6.29778 5.35481C6.53237 4.9578 6.66699 4.4947 6.66699 4.00016C6.66699 2.5274 5.47308 1.3335 4.00033 1.3335C2.52757 1.3335 1.33366 2.5274 1.33366 4.00016C1.33366 5.47292 2.52757 6.66683 4.00033 6.66683C4.49486 6.66683 4.95796 6.53221 5.35497 6.29762L9.70287 10.6455C9.46828 11.0425 9.33366 11.5056 9.33366 12.0002C9.33366 13.4729 10.5276 14.6668 12.0003 14.6668C13.4731 14.6668 14.667 13.4729 14.667 12.0002C14.667 10.5274 13.4731 9.3335 12.0003 9.3335C11.5058 9.3335 11.0427 9.46812 10.6457 9.70271ZM12.0003 13.3335C11.2639 13.3335 10.667 12.7365 10.667 12.0002C10.667 11.2638 11.2639 10.6668 12.0003 10.6668C12.7367 10.6668 13.3337 11.2638 13.3337 12.0002C13.3337 12.7365 12.7367 13.3335 12.0003 13.3335ZM2.66699 4.00016C2.66699 4.73654 3.26395 5.3335 4.00033 5.3335C4.7367 5.3335 5.33366 4.73654 5.33366 4.00016C5.33366 3.26378 4.7367 2.66683 4.00033 2.66683C3.26395 2.66683 2.66699 3.26378 2.66699 4.00016Z" />
                        </g>
                      </svg>
                      &ensp;Add Affiliates
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ContentCopyIcon sx={{ color: '#000' }} />&ensp;Copy Invitation
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                  <Typography variant="body1">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br />Exercitation veniam consequat. 
                  </Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: 5 }}>
        <Grid container columnSpacing={2} sx={{ mb: 3 }}>
          <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3">Previous meeting</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  value={dateValue}
                  onChange={(newDateValue) => {
                    setDateValue(newDateValue);
                  }}
                  renderInput={(params) => <WKTextField {...params} size='small' />}
                />
                &ensp;-&ensp;
                <DatePicker
                  value={dateValue}
                  onChange={(newDateValue) => {
                    setDateValue(newDateValue);
                  }}
                  renderInput={(params) => <WKTextField {...params} size='small' />}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2}>
          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ShoppingCartIcon sx={{ color: '#000' }} />
                      &ensp;View Sales
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <PlayArrowIcon sx={{ color: '#000' }} />&ensp;Play Recording
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>09 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none' }}>
                      <QueryBuilderIcon sx={{ color: '#000' }} />&ensp;1h 45 min
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <GroupIcon />&ensp;134
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <ShoppingCartIcon />&ensp;212
                    </Link>
                    <Typography variant="h5" color="primary" sx={{ display: 'flex', alignItems: 'center', ml: 3, cursor: 'pointer', textTransform: 'none' }} onClick={handleAffiliatesList(true)}>Show Affiliates</Typography>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                  <Typography variant="body1" sx={{ background: 'linear-gradient(#000, #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br />Exercitation veniam consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, cursor: 'pointer' }}><KeyboardArrowDownIcon />&ensp;Show Description</Typography>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
          
          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ShoppingCartIcon sx={{ color: '#000' }} />
                      &ensp;View Sales
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <PlayArrowIcon sx={{ color: '#000' }} />&ensp;Play Recording
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>09 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none' }}>
                      <QueryBuilderIcon sx={{ color: '#000' }} />&ensp;2h 03 min
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <GroupIcon />&ensp;235
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <ShoppingCartIcon />&ensp;319
                    </Link>
                    <Typography variant="h5" color="primary" sx={{ display: 'flex', alignItems: 'center', ml: 3, cursor: 'pointer', textTransform: 'none' }} onClick={handleAffiliatesList(true)}>Show Affiliates</Typography>
                  </Box>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>

          <Grid item md={12}>
            <WKPanel>
              <Grid container>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', pb: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Company product reviews</Typography>
                    <Typography variant="h5" sx={{ color: '#888888' }}>Meeting ID: 393836350987</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton }}>
                      <ShareIcon sx={{ color: '#000' }} />&ensp;Share
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <ShoppingCartIcon sx={{ color: '#000' }} />
                      &ensp;View Sales
                    </Button>
                    <Button variant="contained" sx={{ ...theme.custom.SubActionButton, ml: 2 }}>
                      <PlayArrowIcon sx={{ color: '#000' }} />&ensp;Play Recording
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 2, letterSpacing: '2px' }}>09 November 2021</Typography>
                    <Typography variant="h4" sx={{ letterSpacing: '2px' }}>04:00 PM (America/New_York)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none' }}>
                      <QueryBuilderIcon sx={{ color: '#000' }} />&ensp;2h 03 min
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <GroupIcon />&ensp;235
                    </Link>
                    <Link sx={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'none', ml: 3 }}>
                      <ShoppingCartIcon />&ensp;319
                    </Link>
                    <Typography variant="h5" color="primary" sx={{ display: 'flex', alignItems: 'center', ml: 3, cursor: 'pointer', textTransform: 'none' }} onClick={handleAffiliatesList(true)}>Show Affiliates</Typography>
                  </Box>
                </Grid>
              </Grid>
            </WKPanel>
          </Grid>
        </Grid>
      </Box>

      <Link color="primary" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', '& svg': { color: theme.palette.primary.main } }}><KeyboardArrowDownIcon />&ensp;Load More</Link>

      <NewMeeting open={isNewMeetingOpened} onClose={handleNewMeeting(false)} />
      <AddAffiliate open={isAddAffiliateOpened} onClose={handleAddAffiliate(false)} />
      <AffiliatesList open={isAffiliatesListOpened} onClose={handleAffiliatesList(false)} />
    </WKContentWrapper>
  )
}

export default SellwithZoom;