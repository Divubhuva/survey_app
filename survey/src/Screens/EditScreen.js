import React from 'react'
import  {useParams} from "react-router-dom"
import EditForm from '../Components/EditForm'

function EditScreen(props) {
    
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
                </div>
            </div>
        )
    }
    
    export default EditScreen
    