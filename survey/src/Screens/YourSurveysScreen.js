import React from 'react'
import Button from '@material-ui/core/Button'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'

function YourSurveysScreen() {
    const history = useHistory()

    const addSurvey = () => {
        const id = uuid()
        console.log(id)
        history.push("/addsurvey/"+id)
    }

    return (
        <div className="survey-list">
            <h1 className="your-surveys">
                Your Surveys
            </h1>
            <Button className="addSurBtn" variant="contained" onClick={addSurvey}>
                Add Survey
            </Button>
        </div>
    )
}

export default YourSurveysScreen
