import React,{useRef, useState} from 'react'
import EditForm from '../Components/EditForm'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ViewForm from '../Components/ViewForm';
import Button from '@material-ui/core/Button';


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

   var newSurvery = {
        name: "Survey Name",
        elements : questions 
    }
   var refSurvey = useRef(newSurvery);
   
   const [openPreview, setOpenPreview] = useState(false);

   function saveSurvey(){
    var data = localStorage.getItem("DataBase");
    var Database = JSON.parse(data);   
    Database.surveys.push(refSurvey.current);
    const stringData = JSON.stringify(Database);
    localStorage.setItem("DataBase",stringData);
    
   }
    return (
        
        <div className="addNewSurvey">
            <div className="Suyvey-top">
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
                    <ViewForm dataSrc={refSurvey}/>
                    :
                    <EditForm dataSrc={refSurvey}/>
                    }
                </div>
                
            </div>
            <div className="save-btn">
                    <Button onClick={saveSurvey} type='submit' variant="contained" style={btnstyle} fullWidth>Save Survey</Button>
            </div>
        </div>

        
    )   
}

export default AddNewSurveyScreen
