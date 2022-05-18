import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const useStyles = makeStyles({
    img: {
        maxHeight: 55
    },
    appBar:{
        
    }
});

function Header() {
    const classes = useStyles();
    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar} sx={{boxShadow: 'none'}}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;