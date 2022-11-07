import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const WKTextField = styled(TextField)({
    width: '10rem',
    fontSize: '14px !important',
    '& fieldset': {
        color: '#CCCCCC !important',
        borderColor: '#CCCCCC !important',
    }
});

export default WKTextField;