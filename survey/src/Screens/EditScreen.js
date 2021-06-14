import React,{useRef} from 'react'
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
    var survey  = Database.surveys[index];
    
    var refsurvey = useRef(survey); 

    function saveChange( ){
        Database.surveys[index] = refsurvey.current;
        const stringData = JSON.stringify(Database);
        localStorage.setItem("DataBase",stringData);
        
    }

        return (
            <div>
                <div>
                    <h2>Edit Survey</h2>
                </div>
                <div className="question-form">
                    <br />
                    <div className="section">
                        <EditForm dataSrc={refsurvey}/>
                    </div>
                    <div className="save-btn">
                        <Button onClick={saveChange}type='submit' variant="contained" style={btnstyle} fullWidth>Save Changes</Button>
                    </div>
                </div>
            </div>
        )
    }
    
    export default EditScreen
    