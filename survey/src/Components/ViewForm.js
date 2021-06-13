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
    //const questions  = props.dataSrc.current;

   
        function questionsUI() {
            return props.dataSrc.current.map((ques, index) => (
                <div key={index}>
                    {/* <Accordion expanded = {questions[index].open} className={questions[index].open ? 'add-border' : ""}> */}
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
                                                value={ "Question. "+ ques.questionText}
                                                 ></TextField> 
                                            </div>

                                            <ElementFactory questionType={ques.questionType}  options={ques.options} /> 
                                                
                                                
        
                                            {/* {ques.options.map((OptionText, optionIndex) => 
                                            <div className="add-question-body" key={optionIndex}>
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
                                                    value={ques.options[optionIndex]}>
                                                    </TextField>
                                                </div>
                                            </div>
                                            )} */}
                                                {/* <div className="add-question-body">
                                                    <FormControlLabel disabled control = {
                                                        (ques.questionType!=="text") ?
                                                        <input type={ques.questionType} color="primary" inputprops={{ 'aria-label': 'secondary checkbox' }}
                                                        style={{marginLeft:"10px", marginRight:"10px"}} disabled /> :
                                                        <ShortTextIcon style={{marginRight:"10px"}} />
                                                    } 
                                                    />
                                                </div> */}
    
                                        </AccordionDetails>
                        </div>
                    {/* </Accordion> */}
                </div>
            ))
        };

        return (questionsUI());
    
};

export default ViewForm;