import React,{useState} from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import {login, isUserLogin } from '../UserAction'
import { useHistory } from 'react-router-dom';
import { DEFAULT_PASSWORD, DEFAULT_USERNAME, LOGIN_ERROR_MESSAGE } from '../ConstatantStrings'

function LoginScreen() {

    const [username, setUsernam] = useState(DEFAULT_USERNAME);
    const [password, setPassword] = useState(DEFAULT_PASSWORD);
    const [message, setMessage] = useState("");
    const history = useHistory()

    const requestToLog =(username,password)=>{   
        if(login(username,password)){
            setMessage("");
            history.push('/yoursurveys');
        }
        else{
            setMessage(LOGIN_ERROR_MESSAGE);
        }
    }


    const paperStyle = { 
                           padding :20, 
                           height:'50vh',
                           width: '60%',
                           margin:"10rem auto",
                           fontFamily: ['Times New Roman', 'Times', 'serif'],
                        }
                        
    const btnstyle = { 
                        margin:'2rem 0', 
                        color: 'black', 
                        fontFamily: ['Times New Roman', 'Times', 'serif'],
                     }

    return isUserLogin() ? <div>{history.push("/yoursurveys/")}</div> : (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <h2>Login</h2>
                </Grid>
                <p>{message}</p>

                <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    type="text" value={username}
                    fullWidth required
                    onChange={(e)=>{setUsernam(e.target.value)}}
                />

                <TextField 
                    label='Password'
                    placeholder='Enter password' 
                    type='password' 
                    value={password} 
                    fullWidth required 
                    onChange={(e)=>{setPassword(e.target.value)}}
                 />

                <Button onClick={()=>{requestToLog(username,password)}} 
                    type='submit' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth>
                        Login
                </Button>
            </Paper>
        </Grid>
    )
}

export default LoginScreen