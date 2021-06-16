import React from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ShortTextIcon from '@material-ui/icons/ShortText'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function getComponentIcon(questionType, IconDisable) {
    
   

    switch(questionType) {  
        case "text":
            return (<TextareaAutosize 
                aria-label="minimum height" 
                rowsMin={3} 
                placeholder="Answer" />);
        case "checkbox":
           return(
                <input 
                    type={questionType} 
                    style={{marginRight:"10px"}} 
                    disabled={IconDisable}
                />)
        case "dropdown":
          return(
                <ArrowDropDownCircleIcon 
                    style={{marginRight:"10px"}} 
                />);   
        default:
         return (
                <ShortTextIcon 
                     style={{marginRight:"10px"}} 
                />);
      }
}

function ElementIconFactory(props) {
    return (
        getComponentIcon(props.questionType, props.disabled) 
    )
}
export  default ElementIconFactory;