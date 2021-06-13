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
    var questions  = Database.surveys[index].elements;
    
    var refquestion = useRef(questions); 

        return (
            <div>
                <div>
                    <h2>Edit Survey</h2>
                </div>
                <div className="question-form">
                    <br />
                    <div className="section">
                        <EditForm dataSrc={refquestion}/>
                    </div>
                    <div className="save-btn">
                        <Button type='submit' variant="contained" style={btnstyle} fullWidth>Save Changes</Button>
                    </div>
                </div>
            </div>
        )
    }
    
    export default EditScreen
    