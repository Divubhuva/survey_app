import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link'
import app_logo from '../Images/app_logo.png'

function Header() {
    const preventDefault = (e) => 
    e.preventDefault();

    const style = {
        background: 'black',
        size: 10,
    }

    return (
        <div className="title">
            <AppBar position="static" style={style}>
                <Toolbar>
                    <Typography variant="h6" className="title">
                        <Link to="/login" onClick={preventDefault} color="secondary">
                            <img src={app_logo} title="logo" alt="Logo" />
                        </Link>
                    </Typography>
                </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header
