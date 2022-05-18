import { makeStyles } from "@material-ui/styles";
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { Container } from "@mui/material";

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '0 auto',
    },
    main:{
        width: '100%',
        minHeight: '100vh',

        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundImage:'url(images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    }
});

function Login() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Header/>
            <main className={classes.main}>
                <Container maxWidth='lg'>
                    <Form/>
                </Container>
            </main>
        </div>
    )
}

export default Login;