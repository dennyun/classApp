import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Box } from "@mui/material";

const useStyles = makeStyles({
    root:{
        background: 'red',
        height: '100vh'
    },
    appBar:{
        top: 'auto',
        bottom: 0
    }
})

function NewPost() {
    const classes = useStyles();

    return (
        <Box display='flex' className={classes.root}>
            <Box>Editor</Box>
            <Box>Resultado</Box>
            <Box>
                <AppBar position="fixed" color="inherit" className={classes.appBar}> app </AppBar>
            </Box>
        </Box>
    )
}

export default NewPost;