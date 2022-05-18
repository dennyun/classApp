// Imports
import React from "react";
import { makeStyles} from "@material-ui/styles";
import { FormHelperText, Paper } from "@mui/material";
import { Grid, Avatar,Button, Typography, Link } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import '../style.css'

import { useNavigate } from "react-router-dom";
import authService from "../../../services/authSevice";

// Styles NavBar - Material ui
const useStyles = makeStyles({
    paperStyle: {
        padding :20,
        height:'100%',
        width:390, 
        margin:"auto auto"
    },
    btnstyle: {
        margin:'8px 0'
    },
    grid:{
        height: '15vh'
    }
})

function Form() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleLogin(){
        try {
            await authService.login(email, password);
            navigate('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return( 
        
        <Paper elevation={10} className={classes.paperStyle}>
            <Grid className={classes.grid} align='center'>
                <Avatar className='avatarStyle'><LockOutlined /></Avatar>
                <h2>Entrar</h2>
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

            <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth onClick={handleLogin}>Entrar</Button>
            
            {
                errorMessage &&
                <FormHelperText error>
                    {errorMessage}
                </FormHelperText>
            }
            
            <Typography sx={{marginBottom: '8px', marginTop: '8px'}}>
                <Link>Esqueceu sua senha?</Link>
            </Typography>

            
            <Typography> Não tem uma conta?
                <Link>Registre-se</Link>
            </Typography>
        
        </Paper>

    )
}

/*
            <Typography >
                    <Link href="#" >
                    Forgot password ?
            </Link>
            </Typography>

            <Typography > Do you have an account ?
                    <Link href="#" >
                    Sign Up 
            </Link>
            </Typography>
*/
/* inputs
    <TextField label='Username' placeholder='Enter username' fullWidth required className='textField'/>
    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required className='textField'/>
*/
export default Form;