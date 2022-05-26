// Imports
import React from "react";
import { makeStyles} from "@material-ui/styles";
import { FormHelperText} from "@mui/material";
import { Grid, Avatar, Link} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {login} from "../../actions/accountAction";
import '../Login/style.css'

import { useDispatch } from "react-redux";

// Styles NavBar - Material ui
const useStyles = makeStyles({
    grid:{
        height: '15vh'
    }
})

function SingIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()

    async function handleLogin(){
        try {
            await dispatch(login(email, password));
            navigate('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return( 
        
        <form>
            <div className='header'>
                <div className='logo'>
                        <img src="/images/logo.png" alt="logo" />
                </div>
            </div>

            <div className="paper">
                <Grid className={classes.grid} align='center'>
                    <Avatar className='avatarStyle'><LockOutlined /></Avatar>
                    <h2 className="login-box">Entrar</h2>
                </Grid>

                <Grid>
                    <div className='wrap-input'>
                        <input className={email !== '' ? 'has-value input' : 'input'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <span className='focus-input' data-placeholder='Email'> </span>
                    </div>

                    <div className='wrap-input'>
                        <input className={password !== '' ? 'has-value input' : 'input'} type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                        <span className='focus-input' data-placeholder='Password' type='password' > </span>
                    </div>
                </Grid>

                <div className='container-btn'>
                    <button className='btn' onClick={handleLogin}> Entrar </button>
                </div>
                
                {
                    errorMessage &&
                    <FormHelperText error>
                        {errorMessage}
                    </FormHelperText>
                }
                
                <div className="text">
                    <Link href="#" underline="none" variant="body1">
                        {'Esqueceu sua senha?'}
                    </Link>
                </div>

                
                <div className="text2"> 
                    <span> Não tem uma conta?</span>
                    <Link href="#" underline="none" variant="body1" sx={{marginLeft: '8px'}}>
                        {'Registra-se'}
                    </Link>
                </div>
            </div>
        </form>

    )
}

export default SingIn;