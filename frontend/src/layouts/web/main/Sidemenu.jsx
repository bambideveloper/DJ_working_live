import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

import { logout } from "@store/slices/auth.slice";

const StyledSidemenu = styled(Box)(({ theme }) => ({
    minWidth: 300,
    bgcolor: 'background.paper',
    boxShadow: theme.custom.boxShadow,
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    borderRadius: '3px'
}));

const Sidemenu = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Box>
            <StyledSidemenu sx={{ mr: 5 }}>
                <nav aria-label="main mailbox folders">
                    <List sx={{ p: 0 }}>
                        <ListItem disablePadding>
                            <ListItemButton component={ Link } to="/myaccount">
                                <ListItemText>Dashboard</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Zoom Ready Presentations</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Artificial Intelligence Reports</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={ Link } to="/sell">
                                <ListItemText>Sell with Zoom</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Zoom Meetings</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Zoom Settings</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Zoom Recordings</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Invoices</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Subscriptions</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Payment Methods</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Account details</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>Edit Company</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={ handleLogout }>
                                <ListItemText>Logout</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </StyledSidemenu>
        </Box>
    );
}

export default Sidemenu;