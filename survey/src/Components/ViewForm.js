import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ShortTextIcon from '@material-ui/icons/ShortText'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from "@material-ui/core/styles";

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
    const questions  = props.dataSrc;

   
        function questionsUI() {
            return questions.map((ques, index) => (
                <div key={index}>
                    <Accordion expanded = {questions[index].open} className={questions[index].open ? 'add-border' : ""}>
        
                        <div className="question-boxes">
                                        <AccordionDetails className="add-question">
                                            
                                            <div className="add-question-top">
                                                
                                                <TextField 
                                                type="text" 
                                                
                                                className="question" 
                                                InputProps={{
                                                    readOnly: true,
                                                    
                                                  }}
                                                value={ques.questionText}
                                                 ></TextField> 
                                            </div>
        
        
                                            {ques.options.map((op, j) => 
                                            <div className="add-question-body" key={j}>
                                                {
                                                    (ques.questionType !== "text") ?
                                                    <input type={ques.questionType} style={{marginRight:"10px"}} /> :
                                                    <ShortTextIcon style={{marginRight:"10px"}} />
                                                }
                                                <div>
                                                    <TextField 
                                                    type="text"  
                                                    InputProps={{
                                                        readOnly: true,
                                                        classes
                                                      }}
                                                    value={ques.options[j].optionText}>
                                                    </TextField>
                                                </div>
                                            </div>
                                            )}
                                                <div className="add-question-body">
                                                    <FormControlLabel disabled control = {
                                                        (ques.questionType!=="text") ?
                                                        <input type={ques.questionType} color="primary" inputprops={{ 'aria-label': 'secondary checkbox' }}
                                                        style={{marginLeft:"10px", marginRight:"10px"}} disabled /> :
                                                        <ShortTextIcon style={{marginRight:"10px"}} />
                                                    } 
                                                    />
                                                </div>
    
                                        </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
            ))
        };

        return (questionsUI());
    
};

export default ViewForm;