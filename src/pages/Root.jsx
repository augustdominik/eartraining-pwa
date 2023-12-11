import * as React from 'react';
import { createTheme, IconButton, SwipeableDrawer, ThemeProvider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NavigateNext from '@mui/icons-material/NavigateNext';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, Link } from 'react-router-dom';
import './Root.css';
import PlayFairDisplay from '../assets/Playfair_Display/static/PlayfairDisplay-Regular.ttf';
import Roboto from '../assets/Roboto/Roboto-Medium.ttf';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from '../router/routerConfig';

function Root() {

    const theme = createTheme({
        typography: {
            fontFamily: 'sans-serif',
            h4: {
                fontFamily: 'Playfair'
            }
        },
        palette: {
            mode: 'light',
            primary: {
                main: '#29325C'
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides:
                    `
                    @font-face {
                      font-family: 'Playfair';
                      font-style: normal;
                      font-display: swap;
                      font-weight: 400;
                      src: local('Playfair'), local('PlayfairDisplay-Regular'), url(${PlayFairDisplay}) format('tff');
                },
                    @font-face {
                      font-family: 'Roboto';
                      font-style: normal;
                      font-display: swap;
                      font-weight: 400;
                      src: local('Roboto'), local('Roboto-Medium'), url(${Roboto}) format('tff');
                }
            `
            },
        }
    });

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding component={Link} to={ROUTES.Home}>
                    <ListItemButton>
                        <ListItemIcon>
                            {<NavigateNext />}
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ 'color': '#000' }}>Hjem</Typography>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to={ROUTES.Extensions}>
                    <ListItemButton>
                        <ListItemIcon>
                            {<NavigateNext />}
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ 'color': '#000' }}>Dominanter</Typography>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to={ROUTES.InnerHearing}>
                    <ListItemButton>
                        <ListItemIcon>
                            {<NavigateNext />}
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ 'color': '#000' }}>Inner Hearing</Typography>} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Om'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <NavigateNext /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <Box className="App" sx={{}}>
                <IconButton
                    sx={{ 'alignSelf': 'start', marginTop: 3, marginLeft: 3 }}
                    onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </SwipeableDrawer>
                <Outlet />
            </Box>
        </ThemeProvider>
    );
}

export default Root;
