import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';


function UpdateProfileScreen() {

    const paperStyle = { 
                           padding :20, 
                           height:'40vh',
                           width:280,
                           margin:"10rem auto",
                        }
                        
    const btnstyle = { 
                        margin:'5rem 0', 
                        color: 'black', 
                     }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Update Your Profile</h2>
                </Grid>
                <TextField label='Firstname' placeholder='First Name' fullWidth required/>
                <TextField label='Lastname' placeholder='Last Name' fullWidth required/>
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Update</Button>
            </Paper>
        </Grid>
    )
}

export default UpdateProfileScreen