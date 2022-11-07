import { Box, Grid, Typography, Link } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material/styles';

const ZoomCall = () => {
    const theme = useTheme();

    return (
        <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', backgroundColor: '#F5F7FA', padding: '24px 100px' }}>
            <Grid container>
                <Grid item md={12}>
                    <img src="assets/images/call/sucavu_logo.png" width="156" height="40" />
                </Grid>
                <Grid item md={12} sx={{ backgroundColor: '#fff', p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3" sx={{ fontSize: '24px' }}>Demonstration of jewelry products</Typography>
                        <Link color="secondary" sx={{ textTransform: 'none' }}>Copy invite link<ContentCopyIcon color="secondary" sx={{ ml: 1 }} /></Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle" sx={{ fontWeight: 400 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</Typography>
                    </Box>
                    <Box sx={{ height: '800px' }}>
                        <img src="assets/images/call/call_screen1.png" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ZoomCall;