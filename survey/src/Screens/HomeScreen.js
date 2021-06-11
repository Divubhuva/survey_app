import React from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';

function HomeScreen() {

    const paperStyle = { 
                           padding :20, 
                           height:'40vh',
                           width:280,
                           margin:"10rem auto",
                        }
                        
    const btnstyle = { 
                        margin:'2rem 0', 
                        color: 'black', 
                     }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default HomeScreen