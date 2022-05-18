// Imports
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';

//Styles Home - Material ui
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main:{
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: 64
    }
})

// Header - Main
function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <Header/>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth='lg'>
                    <Box display='flex'>
                        <NavBar/>
                        <Feed/>
                    </Box>
                </Container>
            </main>
            
        </div>
    );
}

export default Home;