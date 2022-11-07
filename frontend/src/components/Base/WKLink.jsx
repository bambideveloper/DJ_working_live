import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledNavLink = styled(Link)({
    fontFamily: 'Open Sans',
    fontSize: '18px',
    fontWeight: 600,
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: '#4CAEEB',
      transition: 'color 0.3s'
    }
});

const WKLink = function (props) {
    return (
        <StyledNavLink component={ RouterLink } { ...props }>
            { props.children }
        </StyledNavLink>
    );
};

export default WKLink;