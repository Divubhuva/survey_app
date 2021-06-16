import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FormGroup } from '@material-ui/core';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function getComponent(questionType, options) {
    
    switch(questionType) {
        case "text":
          return (<TextareaAutosize 
                        aria-label="minimum height" 
                        rowsMin={3} 
                        placeholder="Answer" />);
        case "checkbox":
          return( <FormGroup>
                        { options.map((value)=> {
                            return (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={value}
                                />
                            )
                        })} 
                    </FormGroup>  
                )
       case "dropdown":
          return(
            <Select>
                { options.map((optionText)=> {
                    return (
                        <MenuItem value={optionText}>
                            {optionText}
                        </MenuItem>
                    )
                })}  
            </Select>  
          )
        default:
            return (<TextField 
                        type="text">
                 </TextField>);
    }
}


function ElementFactory(props) {
    return (
        getComponent(props.questionType,props.options) 
    )
}
export default ElementFactory;


