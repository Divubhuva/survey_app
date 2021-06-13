import React from 'react'
import EditForm from '../Components/EditForm'

function EditScreen(props) {

    const questions  = {};
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
    