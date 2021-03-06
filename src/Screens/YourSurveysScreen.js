import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {isUserLogin, getUserInfo} from '../UserAction'
import Settings from '../Components/Settings';
import { DATABASE_KEY } from '../ConstatantStrings'

const useStyles = makeStyles((theme) => ({
    editIcon: {
        margin: theme.spacing(0, 5, 0),
      },
  }));


  
function YourSurveysScreen() {

    const Database = JSON.parse(localStorage.getItem(DATABASE_KEY));

    const history = useHistory()
    const classes = useStyles();
    const addSurvey = () => {
        history.push("/addsurvey/")
    }

    return !isUserLogin() ? <div>{history.push("/login/")}</div> : (
        <div className="survey-list">
            <Settings />
            <p className="userNameStyle">{getUserInfo()} </p>
            <h1 className="your-surveys">
                Your Surveys
            </h1>
            <Button className="addSurBtn" variant="contained" onClick={addSurvey}>
                Add Survey
            </Button>
            <div className={classes.demo}>
              <List className="display-surveys">
                { Database.surveys.map((value,index)=> {

                  return (
                  <ListItem className="List-view" key={index}>
                      <ListItemText
                        primary={value.name}
                      />

                      <ListItemSecondaryAction>
                          <IconButton 
                          className={classes.editIcon} 
                          edge="start" 
                          aria-label="edit"
                          href={"/editsurvey/"+index}
                          >
                            <EditIcon />
                          </IconButton>
                      </ListItemSecondaryAction>

                      <ListItemSecondaryAction>
                          <IconButton 
                          edge="end" 
                          aria-label="view"
                          href={"/viewsurvey/"+index}
                          >
                            <VisibilityIcon />
                          </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem> 
                )})}
              </List>
           </div>
        </div>
    )
}

export default YourSurveysScreen
