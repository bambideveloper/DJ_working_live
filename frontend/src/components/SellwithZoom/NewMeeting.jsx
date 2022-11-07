import { useState, Fragment } from 'react';
import {
    Button, Dialog, DialogContent, DialogTitle, Typography, IconButton, Box, Stepper, Step, StepLabel, Grid, InputLabel,
    FormControl, Checkbox, Backdrop, Modal, Fade
} from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import WKInput from "@components/Base/WKInput";
import WKTextField from "@components/Base/WKTextField";
import WKPanel from "@components/Base/WKPanel";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 1,
    p: 2,
    display: 'flex',
    flexDirection: 'column'
};

const steps = ['Schedule', 'Products', 'Review'];

const NewMetting = props => {
    const [activeStep, setActiveStep] = useState(0);
    const [dateValue, setDateValue] = useState([null, null]);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const theme = useTheme();
    const { open, onClose } = props;

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleOpenConfirmDialog = () => setOpenConfirmDialog(true);

    const handleCloseConfirmDialog = (_, reason) => reason !== "backdropClick" && setOpenConfirmDialog(false);

    return (
        <>
            <Dialog fullWidth={true} maxWidth='sm' open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <IconButton onClick={handleOpenConfirmDialog}><CloseIcon /></IconButton>
                    </Box>
                    <Typography variant="modal_title" sx={{ textTransform: 'uppercase', textAlign: 'center', px: 5 }}>
                        {
                            activeStep < steps.length ? "New Meeting" : "Invite others to join your meeting by sharing the link below!"
                        }
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ width: '100%', p: 5 }} elevation={1}>
                    {
                        activeStep === steps.length
                            ?
                            <Fragment>
                                <Grid container>
                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                        <Typography variant="h3" align="center" sx={{ display: 'flex' }}>Company product reviews</Typography>
                                        <IconButton sx={{ position: 'absolute', right: 0 }}><EditIcon /></IconButton>
                                    </Grid>
                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}><CalendarTodayIcon sx={{ mr: '7px' }} />09 November 2021</Typography>
                                        <Typography variant="subtitle" sx={{ ml: 4, display: 'flex', alignItems: 'center' }}><QueryBuilderIcon sx={{ mr: '7px' }} />04:00 PM</Typography>
                                    </Grid>
                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant="body1" align="center">
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} sx={{ mt: 6, px: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', m: 0, width: '100%', px: 1, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant="subtitle">working.live.us/j/4466018133?pwd=ZFhjT20xa ...</Typography>
                                            <IconButton sx={{ p: 0, width: '20px', height: '20px' }}><ContentCopyIcon /></IconButton>
                                        </Box>
                                    </Grid>
                                    <Grid item md={12} sx={{ mt: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant="body1">Add to my calendar:</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                                            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Google Calendar</Typography>
                                            <Typography variant="h5" sx={{ textTransform: 'uppercase', ml: 4 }}>Outlook</Typography>
                                            <Typography variant="h5" sx={{ textTransform: 'uppercase', ml: 4 }}>Ical</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                                        <Button variant="contained" color="primary" sx={{ ml: 3, px: 3, py: 2 }}>
                                            <ShareIcon sx={{ mr: '5px', fill: '#fff' }} />Schedule Meeting
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Fragment>
                            :
                            <Fragment>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {
                                        steps.map((label, index) =>
                                            <Step key={label}>
                                                <StepLabel sx={{ '& .MuiStepLabel-label': { ...theme.typography.h5, color: 'black' } }}>{label}</StepLabel>
                                            </Step>
                                        )
                                    }
                                </Stepper>

                                {
                                    (() => {
                                        if (activeStep === 0) {
                                            return (
                                                <Grid container>
                                                    <Grid item md={12}>
                                                        <FormControl variant="standard" size="small" fullWidth={true}>
                                                            <InputLabel shrink htmlFor="meeting-topic">
                                                                Topic
                                                            </InputLabel>
                                                            <WKInput id="meeting-topic" size="small" />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3 }}>
                                                        <Grid container columnSpacing={2}>
                                                            <Grid item md={12}>
                                                                <InputLabel shrink>
                                                                    Date
                                                                </InputLabel>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <LocalizationProvider dateAdapter={DateAdapter}>
                                                                    <DatePicker
                                                                        value={dateValue}
                                                                        onChange={(newDateValue) => {
                                                                            setDateValue(newDateValue);
                                                                        }}
                                                                        renderInput={(params) => <WKTextField {...params} size='small' sx={{ width: '100%' }} />}
                                                                    />
                                                                </LocalizationProvider>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <LocalizationProvider dateAdapter={DateAdapter}>
                                                                    <DatePicker
                                                                        value={dateValue}
                                                                        onChange={(newDateValue) => {
                                                                            setDateValue(newDateValue);
                                                                        }}
                                                                        renderInput={(params) => <WKTextField {...params} size='small' sx={{ width: '100%' }} />}
                                                                    />
                                                                </LocalizationProvider>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3 }}>
                                                        <FormControl variant="standard" fullWidth={true}>
                                                            <InputLabel shrink>
                                                                Description (optional)
                                                            </InputLabel>
                                                            <WKTextField multiline rows={5} sx={{ width: '100%', mt: 3 }} />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                                                        <Button variant="contained" color="primary" onClick={handleNext} sx={{ px: 3, py: 2 }}>Select Products<KeyboardArrowRightIcon /></Button>
                                                    </Grid>
                                                </Grid>
                                            );
                                        } else if (activeStep === 1) {
                                            return (
                                                <Grid container>
                                                    <Grid item md={12}>
                                                        <FormControl variant="standard" size="small" fullWidth={true}>
                                                            <InputLabel shrink htmlFor="meeting-topic">
                                                                Search
                                                            </InputLabel>
                                                            <WKInput id="meeting-topic" size="small" />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3 }}>
                                                        <WKPanel sx={{ py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox defaultChecked />
                                                                    <img src="assets/images/products/1.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Bracelet, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$199.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox defaultChecked />
                                                                    <img src="assets/images/products/2.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox defaultChecked />
                                                                    <img src="assets/images/products/3.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$69.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox defaultChecked />
                                                                    <img src="assets/images/products/4.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Stud Pierced Earrings, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox />
                                                                    <img src="assets/images/products/2.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox />
                                                                    <img src="assets/images/products/1.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Bracelet, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$199.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Checkbox />
                                                                    <img src="assets/images/products/3.png" width={32} height={32} style={{ marginLeft: '5px', borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$69.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                                                        <Button variant="contained"
                                                            sx={{
                                                                px: 3, py: 2,
                                                                border: '1px solid #000',
                                                                backgroundColor: '#fff',
                                                                color: '#000', height: '40px',
                                                                '&:hover, &:hover>.MuiSvgIcon-root': {
                                                                    color: '#fff'
                                                                }
                                                            }}
                                                            onClick={handleBack}>
                                                            <KeyboardArrowLeftIcon />Back
                                                        </Button>
                                                        <Button variant="contained" color="primary" onClick={handleNext} sx={{ ml: 3, px: 3, py: 2 }}>Review<KeyboardArrowRightIcon /></Button>
                                                    </Grid>
                                                </Grid>
                                            );
                                        } else if (activeStep == 2) {
                                            return (
                                                <Grid container>
                                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                        <Typography variant="h3" align="center" sx={{ display: 'flex' }}>Company product reviews</Typography>
                                                        <IconButton sx={{ position: 'absolute', right: 0 }}><EditIcon /></IconButton>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}><CalendarTodayIcon sx={{ mr: '7px' }} />09 November 2021</Typography>
                                                        <Typography variant="subtitle" sx={{ ml: 4, display: 'flex', alignItems: 'center' }}><QueryBuilderIcon sx={{ mr: '7px' }} />04:00 PM</Typography>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Typography variant="body1" align="center">
                                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ mt: 3 }}>
                                                        <WKPanel sx={{ py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/1.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Bracelet, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$199.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/2.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/3.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$69.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/4.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Stud Pierced Earrings, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/2.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$89.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/1.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Louison Bracelet, Blue, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$199.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                        <WKPanel sx={{ mt: 1, py: '3px', pl: 2, pr: 3, borderRadius: '10px' }}>
                                                            <Grid container>
                                                                <Grid item md={9} sx={{ display: 'flex', alignItems: 'center', py: '5px' }}>
                                                                    <img src="assets/images/products/3.png" width={32} height={32} style={{ borderRadius: '2px', border: '1px solid #E7E8EB' }} />
                                                                    <Typography sx={{ ml: 2 }} variant="body2">Birthstone Pendant, Pink, Rhodium Plated</Typography>
                                                                </Grid>
                                                                <Grid item md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                                                    <Typography variant="h5" align="right" color="text.secondary">$69.00</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </WKPanel>
                                                    </Grid>
                                                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                                                        <Button variant="contained"
                                                            sx={{
                                                                px: 3, py: 2,
                                                                border: '1px solid #000',
                                                                backgroundColor: '#fff',
                                                                color: '#000', height: '40px',
                                                                '&:hover, &:hover>.MuiSvgIcon-root': {
                                                                    color: '#fff'
                                                                }
                                                            }}
                                                            onClick={handleBack}>
                                                            <KeyboardArrowLeftIcon />Back
                                                        </Button>
                                                        <Button variant="contained" color="primary" onClick={handleNext} sx={{ ml: 3, px: 3, py: 2 }}>Schedule Meeting</Button>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }
                                        return (<></>);
                                    })()
                                }
                            </Fragment>
                    }
                </DialogContent>
            </Dialog>

            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                open={openConfirmDialog} onClose={handleCloseConfirmDialog} closeAfterTransition
                BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                <Fade in={openConfirmDialog}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                            <IconButton onClick={handleCloseConfirmDialog}><CloseIcon /></IconButton>
                        </Box>
                        <Typography variant="modal_title" sx={{ textTransform: 'uppercase', px: 3 }} align="center">
                            If you close the window, you lose all unsaved data. Do you want to close it?
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, alignItems: 'center' }}>
                            <Button variant="contained"
                                sx={{
                                    px: 3, py: 2,
                                    border: '1px solid #000',
                                    backgroundColor: '#fff',
                                    color: '#000', height: '40px',
                                    '&:hover, &:hover>.MuiSvgIcon-root': {
                                        color: '#fff'
                                    }
                                }}
                                onClick={handleCloseConfirmDialog}>
                                Yes
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCloseConfirmDialog} sx={{ ml: 3, px: 3, py: 2 }}>No</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default NewMetting;