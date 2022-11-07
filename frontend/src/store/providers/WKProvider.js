import { useRef } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarProvider } from 'notistack';

const WKProvider = ({ children }) => {
    const notistackRef = useRef();

    return (
        <SnackbarProvider ref={ notistackRef } maxSnack={ 3 }
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            action={ key => <IconButton onClick={ () => notistackRef.current.closeSnackbar(key) }>
                                                <CloseIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                            }>
            {
                children
            }
        </SnackbarProvider>
    );
}

export default WKProvider;