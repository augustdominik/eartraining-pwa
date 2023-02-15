import * as React from 'react';
import AppBar from '../components/AppBar';
import { createTheme, Drawer, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Root.css';
import { blue } from '@mui/material/colors';
import { palette } from '@mui/system';

function Root() {

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500]
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        "&:hover": {
                           // backgroundColor: blue[500]
                        },
                    }
                }
            }
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
                <ListItem disablePadding component={Link} to='/'>
                    <ListItemButton>
                        <ListItemIcon>
                            {<InboxIcon />}
                        </ListItemIcon>
                        <ListItemText primary={'Hjem'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to='/ChordIdentification'>
                    <ListItemButton>
                        <ListItemIcon>
                            {<InboxIcon />}
                        </ListItemIcon>
                        <ListItemText primary={'Akkordhøring'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to='/ChordIdentification'>
                    <ListItemButton>
                        <ListItemIcon>
                            {<InboxIcon />}
                        </ListItemIcon>
                        <ListItemText primary={'Solfachef'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Om'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
            <div className="App">
                <AppBar toggleSideBar={toggleDrawer('left', true)} />
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default Root;
