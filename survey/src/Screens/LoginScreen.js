import React from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
//import axios from 'axios'

function LoginScreen() {



    const paperStyle = { 
                           padding :20, 
                           height:'40vh',
                           width: '60%',
                           margin:"10rem auto",
                           fontFamily: ['Times New Roman', 'Times', 'serif'],
                        }
                        
    const btnstyle = { 
                        margin:'2rem 0', 
                        color: 'black', 
                        fontFamily: ['Times New Roman', 'Times', 'serif'],
                     }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' type="text" value="{username}"  fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' value="{password}" fullWidth required />
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Login</Button>
            </Paper>
        </Grid>
    )
}

export default LoginScreen