import React from 'react'
import TextField from '@material-ui/core/TextField';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { makeStyles } from "@material-ui/core/styles";
import ElementFactory from './ElementsFactory'

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
});

function ViewForm(props) {
    const classes = useStyles();
   
    function questionsUI() {
        return props.dataSrc.current.elements.map((ques, index) => (
            <div key={index}>
                <div className="question-boxes">
                    <AccordionDetails className="add-question">
                        <div className="add-question-top">
                            <TextField 
                                type="text" 
                                className="question" 
                                InputProps={{
                                    readOnly: true,
                                    classes
                                }}
                                value={ ques.questionText}>
                            </TextField> 
                        </div>
                        <ElementFactory questionType={ques.questionType}  options={ques.options} /> 
                    </AccordionDetails>
                </div>
            </div>
            ))
        };

    return (
        <div className="section">
            <div className="question-title-section">
                <div className="question-form-header">
                <TextField 
                    type="text" 
                    className="survey-title" 
                    InputProps={{
                        readOnly: true
                        
                    }}
                    value={props.dataSrc.current.name }>
                </TextField>   
                </div>
            </div>
            {questionsUI()}
                                                 
        </div>
    );
    
};

export default ViewForm;