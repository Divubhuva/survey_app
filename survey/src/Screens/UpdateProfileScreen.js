import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import {isUserLogin} from '../UserAction'
import { useHistory } from 'react-router-dom';
import Settings from '../Components/Settings';
function UpdateProfileScreen() {

    const history = useHistory();
    const paperStyle = { 
                           padding :20, 
                           height:'50vh',
                           width: '70%',
                           margin:"10rem auto",
                        }
                        
    const btnstyle = { 
                        margin:'3rem 0', 
                        color: 'black', 
                     }
    return !isUserLogin() ? <div>{history.push("/login/")}</div> : (
        <Grid>
            <Settings />
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