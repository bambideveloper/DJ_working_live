import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Box)(({ theme }) => ({
    boxShadow: theme.custom.boxShadow,
    padding: '40px',
    width: '100%'
}));

export default StyledContainer;