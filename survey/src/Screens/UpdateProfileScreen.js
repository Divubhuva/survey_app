import React ,{useState}from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import {isUserLogin, updateUserInfo} from '../UserAction'
import { useHistory } from 'react-router-dom';
import Settings from '../Components/Settings';


function UpdateProfileScreen() {

    const history = useHistory();

    
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastNme] = useState("");
    const [message, setMessage] = useState("");


    const requestToUpdate = (_firstname,_lastName)=>{
        
        if((_firstname === "") || (_lastName === "")){
            setMessage("Please enter information.");
        }
        else{
            updateUserInfo(_firstname,_lastName);
            setMessage("User Information updated.");
        
        }
        
    }

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
                <p>{message}</p>
                <TextField label='Firstname' placeholder='First Name' value = {firstname}  onChange={(e)=>{setFirstName(e.target.value)}} fullWidth required/>
                <TextField label='Lastname' placeholder='Last Name' value = {lastName}  onChange={(e)=>{setLastNme(e.target.value)}} fullWidth required/>
                <Button onClick={()=>{requestToUpdate(firstname,lastName)}} type='submit' variant="contained" style={btnstyle} fullWidth>Update</Button>
            </Paper>
        </Grid>
    )
}

export default UpdateProfileScreen