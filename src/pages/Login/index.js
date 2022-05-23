import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import './style.css'

function Login() {
    return(
        <div className='root'>
            <Header/>
            <Form/>
        </div>
    )
}

export default Login;