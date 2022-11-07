import {
    Button, Dialog, DialogContent, DialogTitle, Typography, IconButton, Box, Grid, InputLabel, FormControl
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import WKInput from "@components/Base/WKInput";
import WKPanel from "@components/Base/WKPanel";

const AddAffiliate = props => {
    const { open, onClose } = props;

    return (
        <>
            <Dialog fullWidth={true} maxWidth='sm' open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>
                    <Typography variant="modal_title" sx={{ textTransform: 'uppercase', textAlign: 'center', px: 5 }}>
                        Add Affiliates to your meeting
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ width: '100%', p: 5 }}>
                    <Grid container>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <Typography align="center">
                                Affiliates will receive a unique link for your meeting that can be shared with their personal networks. This allows them to receive credit for sales that occur during the meeting!
                            </Typography>
                        </Grid>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <FormControl variant="standard" size="small" fullWidth={true}>
                                <InputLabel shrink htmlFor="meeting-topic">
                                    Distributor ID
                                </InputLabel>
                                <WKInput id="meeting-topic" size="small" />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <FormControl variant="standard" size="small" fullWidth={true}>
                                <InputLabel shrink htmlFor="meeting-topic">
                                    Distributor Email
                                </InputLabel>
                                <WKInput id="meeting-topic" size="small" />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <Box sx={{ m: 0, width: '100%', backgroundColor: '#F5F7FA', px: 9, py: 1 }}>
                                <Typography variant="body1" align="center">
                                    Done! This distributor will receive an email with a unique link to your meeting.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                            <Button variant="contained" color="primary" sx={{ px: 3, py: 2 }}>Add Affiliate</Button>
                        </Grid>
                        <Grid item md={12} sx={{ mt: 3 }}>
                            <WKPanel sx={{ py: 1, pl: 2, pr: 3, borderRadius: '10px', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="32" height="32" rx="2" fill="#A83560" stroke="#E7E8EB" strokeWidth="0.5"/>
                                        <path d="M22.6667 23V21.6667C22.6667 20.9594 22.3857 20.2811 21.8856 19.781C21.3855 19.281 20.7072 19 20 19H14.6667C13.9594 19 13.2811 19.281 12.781 19.781C12.281 20.2811 12 20.9594 12 21.6667V23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.3327 16.3333C18.8054 16.3333 19.9993 15.1394 19.9993 13.6667C19.9993 12.1939 18.8054 11 17.3327 11C15.8599 11 14.666 12.1939 14.666 13.6667C14.666 15.1394 15.8599 16.3333 17.3327 16.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <Typography variant="body1" color="primary" sx={{ ml: 1 }}>Affiliate Example</Typography>
                                </Box>
                                
                                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6663 11.3335V12.6668H5.33301V11.3335H18.6663Z" fill="#A83560"/>
                                    <path d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z" fill="#A83560"/>
                                </svg>
                            </WKPanel>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default AddAffiliate;