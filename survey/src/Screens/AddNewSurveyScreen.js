import React,{useState} from 'react'
import EditForm from '../Components/EditForm'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ViewForm from '../Components/ViewForm';
import Button from '@material-ui/core/Button'

function AddNewSurveyScreen() {

    const btnstyle = { 
        margin:'2rem 0', 
        color: 'black', 
        width: '50%'
     }


    var  questions  = 
    [
        {   questionText: "Type Question" ,
            questionType: "text",
            options : [
                "Text 1"
            ],
        }
   ];

   const [openPreview, setOpenPreview] = useState(false);

    return (
        
        <div>
            <div className="addNewSurvey">
                <h1>Add New Survey</h1>
                    {
                        openPreview ?
                         <IconButton 
                            edge="start" 
                            aria-label="view" 
                            onClick={()=>{setOpenPreview(false)}}>
                            <VisibilityOffIcon  />
                        </IconButton>
                         :
                         <IconButton 
                            edge="end" 
                            aria-label="view" 
                            onClick={()=>{setOpenPreview(true)}}>
                            <VisibilityIcon  />
                         </IconButton>
                    }
            </div>
            
            <div className="question-form">
                <br />
                <div className="section">
                    {
                    openPreview ?
                    <ViewForm dataSrc={questions}/>
                    :
                    <EditForm dataSrc={questions}/>
                    }
                </div>
                
            </div>
            <div className="save-btn">
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth>Save Survey</Button>
            </div>
        </div>

        
    )   
}

export default AddNewSurveyScreen
