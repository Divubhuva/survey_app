import React,{useRef} from 'react'
import  {useParams} from "react-router-dom"
import ViewForm from '../Components/ViewForm'

function ViewScreen(props) {
    
    const data = localStorage.getItem("DataBase");
    const Database = JSON.parse(data);
    const { index } = useParams();
    
    const questions  = Database.surveys[index].elements;

    var refquestion = useRef(questions); 
        return (
            <div>
                <div>
                    <h2>View Survey</h2>
                </div>
                <div className="question-form">
                    <br />
                    <div className="section">
                        <ViewForm dataSrc={refquestion}/>
                    </div>
                </div>
            </div>
        )
    }
    
export default ViewScreen