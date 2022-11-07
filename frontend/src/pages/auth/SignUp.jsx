import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, OutlinedInput, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useSnackbar } from 'notistack';

import { registerUser } from "@services/auth.service";
import { setAuthTokens, setAccount } from "@store/slices/auth.slice";

const StyledFormGroup = styled(Box)({
    width: '100%',
    backgroundColor: '#f7f9fb',
    padding: '40px',
    paddingBottom: '20px',
    margin: 0,
    textAlign: 'left',
    borderRadius: '5px',
    border: '1px solid #e5e7f2'
});

const StyledOutlinedInput = styled(OutlinedInput)({
    color: '#000',
    fontSize: '16px',
    fontWeight: 600,
    '& input': {
        paddingTop: '12px',
        paddingBottom: '12px',
        backgroundColor: '#fff'
    }
});

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const handleSignUp = async () => {
        if (!username) {
            enqueueSnackbar("Please type username!", { variant: 'error' });

            return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            enqueueSnackbar("Invalid email address!", { variant: 'error' });

            return;
        } else if (!password) {
            enqueueSnackbar("Please type password!", { variant: 'error' });

            return;
        } else if (password !== confirmPass) {
            enqueueSnackbar("Mismatched password!", { variant: 'error' });

            return;
        }

        try {
            let response = await registerUser({ username, email, password });
            enqueueSnackbar("Successfully registered!", { variant: 'success' });
            dispatch(setAuthTokens({ token: response.token, refreshToken: response.refresh }));
            dispatch(setAccount(response.user));
        } catch (err) {
            console.log("err: ", err);
            if (err.status ==400) {
                let keys = Object.keys(err.data);
                enqueueSnackbar(`${ keys[0] }: ${ err.data[keys[0]] }`, { variant: 'error' });
            }
            else enqueueSnackbar("Error!", { variant: 'error' });
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h3">Register</Typography>
            <StyledFormGroup sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h4">Username&nbsp;</Typography>
                        <Typography variant="h4" color="primary">*</Typography>
                    </div>
                    <StyledOutlinedInput sx={{ mt: 2 }} onChange={ e => setUserName(e.target.value) } />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h4">Email&nbsp;</Typography>
                        <Typography variant="h4" color="primary">*</Typography>
                    </div>
                    <StyledOutlinedInput sx={{ mt: 2 }} onChange={ e => setEmail(e.target.value) } />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h4">Password&nbsp;</Typography>
                        <Typography variant="h4" color="primary">*</Typography>
                    </div>
                    <StyledOutlinedInput sx={{ mt: 2 }} type="password" onChange={ e => setPassword(e.target.value) } />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h4">Confirm Password&nbsp;</Typography>
                        <Typography variant="h4" color="primary">*</Typography>
                    </div>
                    <StyledOutlinedInput sx={{ mt: 2 }} type="password" onChange={ e=> setConfirmPass(e.target.value) } />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }} onClick={ handleSignUp }>Sign Up</Button>
                </Box>
            </StyledFormGroup>
        </Box>
    );
}

export default SignUp;