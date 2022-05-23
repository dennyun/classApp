import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Account from "./Account";
import Notifications from "./Notifications";
import WritePost from "./WritePost";

//erro boxShadow
//Styles Home
const useStyles = makeStyles({
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    }
});

function Header() {
    const classes = useStyles();

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar} sx={{boxShadow: 'none'}}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>

                <div className={classes.grow}></div>
                
                <div className={classes.userSection}>
                    <WritePost/>

                    <Box ml={2}>
                        <Notifications/>
                    </Box>
                    
                    <Box ml={2}>
                        <Account/>
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;