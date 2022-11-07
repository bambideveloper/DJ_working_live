import {
    Button, Dialog, DialogContent, DialogTitle, Typography, IconButton, Box, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import WKPanel from "@components/Base/WKPanel";

const AffiliatesList = props => {
    const { open, onClose } = props;

    return (
        <>
            <Dialog fullWidth={true} maxWidth='sm' open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>
                    <Typography variant="modal_title" sx={{ textTransform: 'uppercase', textAlign: 'center', px: 5 }}>
                        Affiliates List
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ width: '100%', p: 5 }}>
                    <Grid container>
                        <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 700, fontSize: '19px' }}>
                                Company product reviews
                            </Typography>
                            <Typography variant="h5" align="center" sx={{ color: '#888888', mt: 3, fontWeight: 600 }}>Meeting ID: 393836350987</Typography>
                        </Grid>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <WKPanel sx={{ py: 1, pl: 2, pr: 3, borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="32" height="32" rx="2" fill="#A83560" stroke="#E7E8EB" strokeWidth="0.5"/>
                                        <path d="M22.6667 23V21.6667C22.6667 20.9594 22.3857 20.2811 21.8856 19.781C21.3855 19.281 20.7072 19 20 19H14.6667C13.9594 19 13.2811 19.281 12.781 19.781C12.281 20.2811 12 20.9594 12 21.6667V23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.3327 16.3333C18.8054 16.3333 19.9993 15.1394 19.9993 13.6667C19.9993 12.1939 18.8054 11 17.3327 11C15.8599 11 14.666 12.1939 14.666 13.6667C14.666 15.1394 15.8599 16.3333 17.3327 16.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <Typography variant="body1" color="primary" sx={{ ml: 1 }}>Affiliate Example</Typography>
                                </Box>
                            </WKPanel>
                            <WKPanel sx={{ py: 1, pl: 2, pr: 3, borderRadius: '10px', mt: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="32" height="32" rx="2" fill="#A83560" stroke="#E7E8EB" strokeWidth="0.5"/>
                                        <path d="M22.6667 23V21.6667C22.6667 20.9594 22.3857 20.2811 21.8856 19.781C21.3855 19.281 20.7072 19 20 19H14.6667C13.9594 19 13.2811 19.281 12.781 19.781C12.281 20.2811 12 20.9594 12 21.6667V23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.3327 16.3333C18.8054 16.3333 19.9993 15.1394 19.9993 13.6667C19.9993 12.1939 18.8054 11 17.3327 11C15.8599 11 14.666 12.1939 14.666 13.6667C14.666 15.1394 15.8599 16.3333 17.3327 16.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <Typography variant="body1" color="primary" sx={{ ml: 1 }}>Affiliate Example</Typography>
                                </Box>
                            </WKPanel>
                            <WKPanel sx={{ py: 1, pl: 2, pr: 3, borderRadius: '10px', mt: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="32" height="32" rx="2" fill="#A83560" stroke="#E7E8EB" strokeWidth="0.5"/>
                                        <path d="M22.6667 23V21.6667C22.6667 20.9594 22.3857 20.2811 21.8856 19.781C21.3855 19.281 20.7072 19 20 19H14.6667C13.9594 19 13.2811 19.281 12.781 19.781C12.281 20.2811 12 20.9594 12 21.6667V23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.3327 16.3333C18.8054 16.3333 19.9993 15.1394 19.9993 13.6667C19.9993 12.1939 18.8054 11 17.3327 11C15.8599 11 14.666 12.1939 14.666 13.6667C14.666 15.1394 15.8599 16.3333 17.3327 16.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <Typography variant="body1" color="primary" sx={{ ml: 1 }}>Affiliate Example</Typography>
                                </Box>
                            </WKPanel>
                        </Grid>
                        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                            <Button variant="contained" color="primary" sx={{ px: 3, py: 2 }}>Back To My Account</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default AffiliatesList;