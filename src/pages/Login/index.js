import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { Container } from "@mui/material";

function Login() {
    return(
        <div className='root-login'>
            <Header/>
            <main className='main-login'>
                <Container maxWidth='lg'>
                    <Form/>
                </Container>
            </main>
        </div>
    )
}

export default Login;