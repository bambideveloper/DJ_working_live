import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';

import WKContentWrapper from "@components/Base/WKContentWrapper";
import WKLink from "@components/Base/WKLink";
import { logout } from "@store/slices/auth.slice";

const MyAccount = () => {
    const account = useSelector(state => state.auth.account);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Box sx={{ width: '100%' }}>
            <WKContentWrapper sx={{ display: 'flex' }}>
                <Typography variant='h4' sx={{ color: '#888888', fontWeight: 400 }}>
                    Hello <strong>{ account.username }</strong> (not <strong>{ account.username }</strong>?&nbsp;
                </Typography>
                <WKLink to="#" color="primary" onClick={ handleLogout }>
                    Log out
                </WKLink>
                <Typography variant='h4' sx={{ color: '#888888', fontWeight: 400 }}>
                    )
                </Typography>
            </WKContentWrapper>
        </Box>
    );
}

export default MyAccount;