import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Bell } from "react-feather";
import { Avatar } from "@mui/material";

//erro boxShadow
const useStyles = makeStyles({
    appBar:{
        
    },
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
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
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
                {/*<div>
                    <span>Conecta Class Lock</span>
                </div>
                <div>
                    <Button color="primary" variant="contained">Novo post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;