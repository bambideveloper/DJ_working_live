import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Header = styled('div')({
  'position': 'absolute',
  'left': 0,
  'top': 0,
  'width': '100%',
  'paddingTop': '168px',
  'textAlign': 'left',
  'marginBottom': '50px',
  'paddingBottom': '100px',
  'overflow': 'hidden',
  'backgroundColor': '#f5f5f5',
  'lineHeight': '28px'
});

const Overlay = styled(Box)({
    'backgroundImage': `url(${ process.env.PUBLIC_URL }/assets/images/header/bg-1-1.jpg)`,
    'position': 'absolute',
    'zIndex': 0,
    'width': '100%',
    'height': '105%',
    'top': 0,
    'left': 0,
    'backgroundSize': 'cover',
    'backgroundPosition': 'center'
});

const WebHeader = (props) => {
  return (
    <Header>
        <Overlay />
        <Box sx={{ position: 'absolute', zIndex: 'tooltip', width: '100%' }}>
            <Container maxWidth='xl' sx={{ zIndex: 'tooltip' }}>
                <Typography variant="h1">My Account</Typography>
            </Container>
        </Box>
    </Header>
  )
}

export default WebHeader;