import React, {useState} from 'react'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import SubjectIcon from '@material-ui/icons/Subject'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { BsTrash } from 'react-icons/bs'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ElementIconFactory from './ElementIconFactory'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function EditForm(props) {

const [questions, setQuestions] = useState( props.dataSrc.current);



function questionChangeHandler(text, index) {
    var newQuestion = [...props.dataSrc.current]
    newQuestion[index].questionText = text;
    setQuestions(newQuestion)
    console.log(newQuestion)
}

function addQuestionType(index, type) {
    let qs = [...props.dataSrc.current]
    console.log(type)
    qs[index].questionType = type;
    setQuestions(qs)
}

function optionChangeHandler(text, index, OptionIndex) {
    var optionsQuestion = [...props.dataSrc.current]
    optionsQuestion[index].options[OptionIndex] = text;
    setQuestions(optionsQuestion)
    console.log(optionsQuestion)
}

function removeOption(index, OptionIndex){
    var removeOptionQuestion = [...props.dataSrc.current]
    if ( removeOptionQuestion[index].options.length > 1) {
        removeOptionQuestion[index].options.splice(OptionIndex,1)
        props.dataSrc.current = removeOptionQuestion;
        setQuestions(removeOptionQuestion)
        console.log(index + "__" + OptionIndex)
    }
}

function addOption(index){
    var optionsOfQuestion = [...props.dataSrc.current];
    optionsOfQuestion[index].options.push("Text " + (optionsOfQuestion[index].options.length + 1))
    console.log(optionsOfQuestion);
    props.dataSrc.current = optionsOfQuestion;
    setQuestions(optionsOfQuestion)
  }

function deleteQuestion(index){
    var qs = [...props.dataSrc.current] 
    if(qs.length > 1){
      qs.splice(index, 1);
    }
    props.dataSrc.current = qs;
    setQuestions(qs)
  }

function addMoreQuestionField(){
    setQuestions(props.dataSrc.current=[...props.dataSrc.current, {questionText: "Type Question", questionType:"text", options : ["Text 1"],}]);
}



function questionsUI() {
    
    return questions.map((ques, index) => (
        <div key={index}>
            {/* <Accordion expanded = {questions[index].open} className={questions[index].open ? 'add-border' : ""}> */}
                <div className="question-boxes">
                                <AccordionDetails className="add-question">
                                    
                                    <div className="add-question-top">
                                        
                                        <TextField 
                                        type="text" 
                                        className="question" 
                                        placeholder="Question" 
                                        value={ques.questionText} 
                                        onChange={(e)=>{questionChangeHandler(e.target.value, index)}}>
                                        </TextField>
                                        


                                        <Select
                                        defaultValue="text" 
                                        className="select" 
                                        style={{color: "#5f6368", fontSize: "15px"}}
                                        >
                                            <MenuItem 
                                           
                                            value="text" 
                                            onClick={()=>{addQuestionType(index, "text")}
                                            }>
                                                <SubjectIcon style={{marginRight:"10px"}} />
                                                Paragraph
                                            </MenuItem>
                                            
                                            <MenuItem 
                                            
                                            value="checkbox" 
                                            onClick={()=>{addQuestionType(index, "checkbox")}}>
                                            <CheckBoxIcon style={{marginRight:"10px", color: "#70757a"}} checked />
                                                Checkboxes
                                            </MenuItem>
                                            
                                            <MenuItem 
                                            value="dropdown" 
                                            onClick={()=>{addQuestionType(index, "dropdown")}}>
                                            <ArrowDropDownCircleIcon style={{marginRight:"10px", color: "#70757a"}} checked />
                                                Dropdown
                                            </MenuItem>
                                        </Select>
                                    </div>


                                    {
                                    
                                    (ques.questionType !== "text") ?
                                    ques.options.map((OptionText, optionIndex) => 
                                    <div 
                                    className="add-question-body" 
                                    key={optionIndex}>
                                        {
                                            // (ques.questionType !== "text") ?
                                            // <input type={ques.questionType} style={{marginRight:"10px"}} /> :
                                            // <ShortTextIcon style={{marginRight:"10px"}} />
                                        }
                                        <ElementIconFactory questionType={ques.questionType} />
                                        <div>
                                            <input 
                                            type="text" 
                                            className="text-input" 
                                            placeholder="Text" 
                                            value={ques.options[optionIndex]} 
                                            onChange={(e)=>{optionChangeHandler(e.target.value, index, optionIndex)}}>

                                            </input>
                                        </div>

                                       
                                        <IconButton 
                                        aria-label="delete" 
                                        onClick={()=>{removeOption(index, optionIndex)}}
                                        >
                                            <CloseIcon  />
                                        </IconButton>
                                    </div>
                                    )
                                    : 
                                    null
                                    }
                                        <div className="add-question-body">
                                            <FormControlLabel disabled control = 
                                            // {
                                            //     (ques.questionType!=="text") ?
                                            //     <input 
                                            //     type={ques.questionType} 
                                            //     color="primary" 
                                            //     inputprops={{ 'aria-label': 'secondary checkbox' }}
                                            //     style={{marginLeft:"10px", marginRight:"10px"}} 
                                            //     disabled /> 
                                            //     :

                                            //     <ShortTextIcon style={{marginRight:"10px"}} />
                                            // } 
                                            {
                                                <ElementIconFactory questionType={ques.questionType}  disabled/>
                                            }
                                            label = {
                                                (ques.questionType!=="text") ?
                                                <div>
                                                    {/* <input type="text" className="text-input" style={{fontSize:"20px", width:"100px"}} placeholder="Add other"></input> */}
                                                    <Button onClick={()=>{addOption(index)}} size="small" style={{textTransform: 'none', color: "#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                                                </div>:null
                                            }
                                            />
                                        </div>

                                    <div className="add-footer">
                                        <div className="add-question-bottom">
                                        <IconButton aria-label="delete" onClick={()=>{deleteQuestion(index)}}>
                                            <BsTrash />
                                        </IconButton>
                                        </div>
                                    </div>
                                </AccordionDetails>

                        {
                            ((questions.length-1) === index) ?
                            <div className="question-edit">
                               <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
                            </div>:null
                            
                        }
                        
                </div>
            {/* </Accordion> */}
        </div>
    )
    )
}

    return (
        <div>
            <div className="question-form">
                <br />
                <div className="section">
                    <div className="question-title-section">
                        <div className="question-form-header">
                            <input type="text" className="survey-title" style={{color: "black"}} placeholder="Untitled survey"></input>
                        </div>
                    </div>
                    {questionsUI()}
                    
                </div>
            </div>
        </div>
    )
}

export default EditForm
