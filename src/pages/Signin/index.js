import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    root:{
        width: '100%',
        margin: '0 auto'
    },
    containerLogin:{
        width: '100%',
        minHeight: '100vh',

        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '15px',
        backgroundColor: '#111',
    },
    wrapForm: {
        width: '390px',
        backgroundColor: '#333',
        borderRadius: '10px',
    
        overflow: 'hidden',
        padding: '40px 55px 40px 55px',
    
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.2)',
    }
})

function SignIn(){
    const classes = useStyles();

    return(
        <div className={classes.root}> 
            <div className={classes.containerLogin}>
                <div className={classes.wrapForm}>
                    <form className="login-form">
                    
                        <span className="login-form-title"> Bem Vindo </span>
                        <span className="login-form-title">
                        <img src={''} alt="jp"/>
                        </span>

                        <div className='wrap-input'>
                        <input type='email'  />
                        <span className='focus-input' data-placeholder='Email'> </span>
                        </div>

                        <div className='wrap-input'>
                        <input type='password'/>
                        <span className='focus-input' data-placeholder='Password'> </span>

                        </div>
                            <div className='container-login-form-btn'>
                            <button className='login-form-btn'> Login </button>
                        </div>

                        <div className='text-center'>
                        <span className='text1'> Não possui conta? </span>
                        
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;