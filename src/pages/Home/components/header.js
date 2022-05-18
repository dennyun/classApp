import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Bell } from "react-feather";
import { Avatar } from "@mui/material";

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
    },
    bell: {
        marginRight: 10,
        marginLeft: 10
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

                    <Button variant="contained" color="primary" >
                        Novo Post
                    </Button>
                    
                    <SvgIcon className={classes.bell}>
                       <Bell></Bell> 
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="" />

                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;