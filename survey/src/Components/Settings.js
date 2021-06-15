import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from '../UserAction'
import { useHistory } from 'react-router-dom';

function Settings() {

    const history = useHistory()
   const logoutRequest = () => {
       logout();
       history.push('/login')
   }

    return (
        <div className="settingsIcons">
             <IconButton 
                      edge="end" 
                      aria-label="view"
                      href={"/update"}
                      >
                        <AccountCircleIcon  style={{ fill: '#FCB214' }}/>
                      </IconButton>


                      <IconButton 
                      edge="end" 
                      aria-label="view"
                      onClick={()=>{logoutRequest()}}
                      >
                        <ExitToAppIcon style={{ fill: '#FCB214' }} />
                      </IconButton>
        </div>
    )
}

export default Settings
