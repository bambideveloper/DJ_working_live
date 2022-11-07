import { Container, Box } from '@mui/material';

import SideMenu from "./Sidemenu";

const Content = props => {
    return (
        <Container maxWidth='xl' sx={{ mt: 40, zIndex: 'tooltip', color: '#000', mb: 10 }}>
            <Box sx={{ display: 'flex' }}>
                {
                    props.sidemenu && <SideMenu />
                }
                { props.children }
            </Box>
        </Container>
    );
}

export default Content;