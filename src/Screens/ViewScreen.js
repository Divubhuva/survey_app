import React,{useRef} from 'react'
import {useHistory, useParams} from "react-router-dom"
import ViewForm from '../Components/ViewForm'
import {isUserLogin} from '../UserAction'
import Settings from '../Components/Settings'
import { DATABASE_KEY } from '../ConstatantStrings'

function ViewScreen(props) {
    const history = useHistory();
    const data = localStorage.getItem(DATABASE_KEY);
    const Database = JSON.parse(data);
    const { index } = useParams(); 
    const survey  = Database.surveys[index];

    var refsurvey = useRef(survey); 
        return !isUserLogin() ? <div>{history.push("/login/")}</div> : (
            <div>
                <Settings />
                <div>
                    <h2>View Survey</h2>
                </div>
                <div className="question-form">
                    <br />
                    <div className="section">
                        <ViewForm dataSrc={refsurvey}/>
                    </div>
                </div>
            </div>
        )
    }
    
export default ViewScreen