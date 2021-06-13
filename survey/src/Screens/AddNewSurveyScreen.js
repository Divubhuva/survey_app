import React,{useState} from 'react'
import EditForm from '../Components/EditForm'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ViewForm from '../Components/ViewForm';


function AddNewSurveyScreen() {
let questions  = 
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
            <div>
                <h1>Add New Surver</h1>
                
                    {
                        openPreview ?
                         <IconButton 
                         edge="start" 
                         aria-label="view" 
                         
                         onClick={()=>{setOpenPreview(false)}}>
                         <VisibilityOffIcon  />
                                 </IconButton>
                         :
                         <IconButton edge="end" aria-label="view" 
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
        </div>
    )   
}

export default AddNewSurveyScreen
