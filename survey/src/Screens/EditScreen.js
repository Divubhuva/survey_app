import React from 'react'
import  {useParams} from "react-router-dom"
import EditForm from '../Components/EditForm'
import Button from '@material-ui/core/Button'



function EditScreen(props) {
    
    const btnstyle = { 
        margin:'2rem 0', 
        color: 'black', 
        width: '50%'
     }

    const data = localStorage.getItem("DataBase");
   
    const Database = JSON.parse(data);
    
    
    const { index } = useParams();
    const questions  = Database.surveys[index].elements;
    
        return (
            <div>
                <div className="question-form">
                    <br />
                    <div className="section">
                        <EditForm dataSrc={questions}/>
                    </div>
                    <div className="save-btn">
                        <Button type='submit' variant="contained" style={btnstyle} fullWidth>Save Changes</Button>
                    </div>
                </div>
            </div>
        )
    }
    
    export default EditScreen
    