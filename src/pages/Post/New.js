import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles({
    root:{
        background: 'red',
        height: '100%'
    }
})

function NewPost() {
    const classes = useStyles();

    return (
        <Box display='flex' className={classes.root}>
            <Box>Editor</Box>
            <Box>Resultado</Box>
        </Box>
    )
}

export default NewPost;