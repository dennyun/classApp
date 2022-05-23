// Imports
import React from "react";
import { makeStyles} from "@material-ui/styles";
import { ListItem, ListItemText, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { ListSubheader } from "@mui/material";

// Styles NavBar - Material ui
const useStyles = makeStyles({
    root: {
        padding: 16,
        width: 275,
        marginRight: 16
    },
    button: {
        width: '100%'
    }
})
// Set Tags
const tags = [
    {id: 1, name: 'reactjs'},
    {id: 2, name: 'php'},
    {id: 3, name: 'javascript'},
    {id: 4, name: 'dotnet'},
    {id: 5, name: 'materialdesign'},
    {id: 6, name: 'webdev'},
]
// NavBar list tags
function NavBar() {
    const classes = useStyles();

    return( 
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.root}>Registrar Gratis</Button>
           
            <ListSubheader> {`Tags em alta`} </ListSubheader>
           
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
           
            <ListItem button> Exibir mais Tags </ListItem>
        </Paper>
    )
}

export default NavBar;