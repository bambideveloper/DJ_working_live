import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Menu, MenuItem, Box, Typography, Button } from '@mui/material';
import { styled, alpha } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavLink = styled(Link)({
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '15px',
    fontWeight: 400,
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: '#4CAEEB',
      transition: 'color 0.3s'
    }
});

const StyledNavTypography = styled(Typography)({
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    fontWeight: 400,
    mx: 4,
    cursor: 'pointer',
    '&:hover, &:hover svg': {
        backgroundColor: 'transparent !important',
        color: '#4CAEEB !important'
    },
    '&:active, &:active svg': {
        color: '#B62561!important'
    }
});

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const WebHeader = () => {
    const pages = ['My Account', { menu: 'Upgrades', sub: ['Zoom Upgrades', 'AI Meetings Product']}, 'Contact Us', { menu: 'Learn More', sub: ['AI Meetings', 'Virtual Presentation', 'Calendly'] }];
    const nonLoginedMenu = [{
      name: 'Home',
      link: '/'
    }, {
      name: 'Pricing',
      link: '/price'
    }, {
      name: 'Contact Us/FAQ',
      link: '/faq'
    }, {
      name: 'Sign-in',
      link: '/signin'
    }];
    const [anchorEls, setAnchorEls] = useState({});
    const auth = useSelector(state => state.auth);
    
    const handleClick = menu => event => {
        let currentAnchorEls = { ...anchorEls };
        currentAnchorEls[menu] = event.currentTarget;
        setAnchorEls(currentAnchorEls);
    };

    const handleClose = menu => () => {
        let currentAnchorEls = { ...anchorEls };
        currentAnchorEls[menu] = null;
        setAnchorEls(currentAnchorEls);
    };

    const isLoggined = !!(auth.account);

    return (
        <AppBar position="absolute" sx={{ zIndex: 'tooltip', backgroundColor: '#00000000', boxShadow: 0, borderBottom: '0px' }}>
            <Container maxWidth={ false }>
                <Toolbar disableGutters>
                    <Link to="/">
                        <img sx={{ display: 'inline-block' }} src={`${ process.env.PUBLIC_URL }/assets/images/logo.png`} width="135" alt="Working Live" />
                    </Link>

                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                        {
                          !isLoggined
                            ?
                              <>
                                {
                                  nonLoginedMenu.map(menu =>
                                    <NavLink key={ menu.link } to={ menu.link } sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                                        { menu.name }
                                    </NavLink>
                                  )                                
                                }
                                <Button variant="contained" color="primary" component={ Link } to="/signup">Sign Up</Button>
                              </>
                            :
                            <>
                              {
                                pages.map((page, index) =>
                                  typeof page == 'string' ?
                                      <NavLink key={ index } to="#" underline="none" sx={{ display: 'flex', alignItems: 'center', mx: 4 }}>
                                          { page }
                                      </NavLink>
                                  :
                                  <Fragment key={ index }>
                                      <StyledNavTypography onMouseEnter={handleClick(page.menu)}>
                                          { page.menu } <KeyboardArrowDownIcon />
                                      </StyledNavTypography>
                                      <StyledMenu elevation={0} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                              anchorEl={ anchorEls[page.menu] } sx={{ zIndex: 'tooltip' }}
                                              open={ Boolean(anchorEls[page.menu]) } onClose={ handleClose(page.menu) }>
                                          {
                                              page.sub.map((subMenu, subIndex) =>
                                                  <MenuItem key={ 10 * (subIndex + 1) } onClick={ handleClose(page.menu) } disableRipple>
                                                      { subMenu }
                                                  </MenuItem>
                                              )
                                          }
                                      </StyledMenu>
                                  </Fragment>
                                )
                              }
                            </>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default WebHeader;