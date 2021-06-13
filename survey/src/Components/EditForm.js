import React, {useState} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import SubjectIcon from '@material-ui/icons/Subject'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import Radio from '@material-ui/core/Radio'
import ShortTextIcon from '@material-ui/icons/ShortText'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { BsTrash } from 'react-icons/bs'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

function EditForm(props) {

const [questions, setQuestions] = useState( props.dataSrc);

function questionChangeHandler(text, index) {
    var newQuestion = [...questions]
    newQuestion[index].questionText = text;
    setQuestions(newQuestion)
    console.log(newQuestion)
}

function addQuestionType(index, type) {
    let qs = [...questions]
    console.log(type)
    qs[index].questionType = type;
    setQuestions(qs)
}

function optionChangeHandler(text, index, j) {
    var optionsQuestion = [...questions]
    optionsQuestion[index].options[j].optionText = text;
    setQuestions(optionsQuestion)
    console.log(optionsQuestion)
}

function removeOption(index, j){
    var removeOptionQuestion = [...questions]
    if(removeOptionQuestion[index].options.length > 1) {
        removeOptionQuestion[index].options.splice(j, 1)
        setQuestions(removeOptionQuestion)
        console.log(index + "__" + j)
    }
}

function addOption(index){
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[index].options.push({optionText: "Text " + (optionsOfQuestion[index].options.length + 1)})
    console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion)
  }

function deleteQuestion(index){
    let qs = [...questions] 
    if(questions.length > 1){
      qs.splice(index, 1);
    }
    setQuestions(qs)
  }

function addMoreQuestionField(){
    setQuestions(questions=> [...questions, {questionText: "Type Question", questionType:"radio", options : [{optionText: "Text 1"}], open: true }]);
}

function questionsUI() {
    return questions.map((ques, index) => (
        <div key={index}>
            <Accordion expanded = {questions[index].open} className={questions[index].open ? 'add-border' : ""}>

                <div className="question-boxes">
                                <AccordionDetails className="add-question">
                                    
                                    <div className="add-question-top">
                                        
                                        <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{questionChangeHandler(e.target.value, index)}}></input>
                                        
                                        <Select
                                        defaultValue="Paragraph" 
                                        className="select" 
                                        style={{color: "#5f6368", fontSize: "15px"}}
                                        >
                                            <MenuItem 
                                           
                                            value="Paragraph" 
                                            onClick={()=>{addQuestionType(index, "text")}
                                            }>
                                                <SubjectIcon style={{marginRight:"10px"}} />
                                                Paragraph
                                            </MenuItem>
                                            
                                            <MenuItem 
                                            
                                            value="Checkboxes" 
                                            onClick={()=>{addQuestionType(index, "checkbox")}}>
                                            <CheckBoxIcon style={{marginRight:"10px", color: "#70757a"}} checked />
                                                Checkboxes
                                            </MenuItem>
                                            
                                            <MenuItem 
                                            
                                            value="Multiple Choice" 
                                            onClick={()=>{addQuestionType(index, "radio")}}>
                                            <Radio style={{marginRight:"0px", color: "#70757a"}} checked />
                                                Multiple Choice
                                            </MenuItem>
                                        </Select>
                                    </div>


                                    {ques.options.map((op, j) => 
                                    <div className="add-question-body" key={j}>
                                        {
                                            (ques.questionType !== "text") ?
                                            <input type={ques.questionType} style={{marginRight:"10px"}} /> :
                                            <ShortTextIcon style={{marginRight:"10px"}} />
                                        }
                                        <div>
                                            <input type="text" className="text-input" placeholder="Text" value={ques.options[j].optionText} onChange={(e)=>{optionChangeHandler(e.target.value, index, j)}}></input>
                                        </div>

                                       
                                        <IconButton aria-label="delete" onClick={()=>{removeOption(index, j)}}>
                                            <CloseIcon  />
                                        </IconButton>
                                    </div>
                                    )}
                                        <div className="add-question-body">
                                            <FormControlLabel disabled control = {
                                                (ques.questionType!=="text") ?
                                                <input 
                                                type={ques.questionType} 
                                                color="primary" 
                                                inputprops={{ 'aria-label': 'secondary checkbox' }}
                                                style={{marginLeft:"10px", marginRight:"10px"}} 
                                                disabled /> 
                                                :

                                                <ShortTextIcon style={{marginRight:"10px"}} />
                                            } label = {
                                                <div>
                                                    <input type="text" className="text-input" style={{fontSize:"20px", width:"100px"}} placeholder="Add other"></input>
                                                    <Button onClick={()=>{addOption(index)}} size="small" style={{textTransform: 'none', color: "#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                                                </div>
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


                        <div className="question-edit">
                            <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
                        </div>
                </div>
            </Accordion>
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
