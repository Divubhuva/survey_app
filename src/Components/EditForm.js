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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    textarea: {
        resize: "both"
      }
});

function EditForm(props) {

const classes = useStyles();
const [questions, setQuestions] = useState( props.dataSrc.current.elements);

function questionChangeHandler(text, index) {
    var newQuestion = [...props.dataSrc.current.elements]
    newQuestion[index].questionText = text;
    setQuestions(newQuestion)
}

function addQuestionType(index, type) {
    let qs = [...props.dataSrc.current.elements]
    qs[index].questionType = type;
    setQuestions(qs)
}

function optionChangeHandler(text, index, OptionIndex) {
    var optionsQuestion = [...props.dataSrc.current.elements]
    optionsQuestion[index].options[OptionIndex] = text;
    setQuestions(optionsQuestion)
}

function removeOption(index, OptionIndex){
    var removeOptionQuestion = [...props.dataSrc.current.elements]
    if ( removeOptionQuestion[index].options.length > 1) {
        removeOptionQuestion[index].options.splice(OptionIndex,1)
        props.dataSrc.current.elements = removeOptionQuestion;
        setQuestions(removeOptionQuestion)
    }
}

function addOption(index){
    var optionsOfQuestion = [...props.dataSrc.current.elements];
    optionsOfQuestion[index].options.push("Text " + (optionsOfQuestion[index].options.length + 1))
    props.dataSrc.current.elements = optionsOfQuestion;
    setQuestions(optionsOfQuestion)
  }

function deleteQuestion(index){
    var qs = [...props.dataSrc.current.elements] 
    if(qs.length > 1){
      qs.splice(index, 1);
    }
    props.dataSrc.current.elements = qs;
    setQuestions(qs)
  }

function addMoreQuestionField(){
    setQuestions(props.dataSrc.current.elements=[...props.dataSrc.current.elements, {placeholder: "Type Question", questionType:"text", options : ["Text 1"],}]);
}

function onDragEnd(result) {

    if (!result.destination) {
        return;
      }
      const item = reorder(
        result.source.index,
        result.destination.index
      );
      setQuestions(item);
  }
  
  const reorder = ( startIndex, endIndex) => {
    var dndList = [...props.dataSrc.current.elements];
      const [removed] = dndList.splice(startIndex, 1);
      dndList.splice(endIndex, 0, removed);
      props.dataSrc.current.elements = dndList;
        return dndList;
  };
   

function questionsUI() {
    
    return questions.map((ques, index) => (
        <Draggable key={index} draggableId={index + 'id'} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
          <div style={{marginBottom: "0px"}}>
             <div key={index}>
                 <div className="question-boxes">
                                <AccordionDetails className="add-question"> 
                                    <div className="add-question-top">
                                        <TextField 
                                        type="text" 
                                        className="question" 
                                        placeholder="Question" 
                                        multiline
                                        InputProps={{
                                            className: classes.textarea
                                        }}
                                        value={ques.questionText} 
                                        onChange={(e)=>{questionChangeHandler(e.target.value, index)}}>
                                        </TextField>
                                    
                                        <Select 
                                        value= {ques.questionType}
                                        className="select" 
                                        style={{color: "#5f6368", fontSize: "15px"}}>
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
                                    <div className="add-question-body" 
                                        key={optionIndex}>
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
                                            onClick={()=>{removeOption(index, optionIndex)}}>
                                            <CloseIcon  />
                                        </IconButton>
                                    </div>
                                    ) : null
                                    }
                                        <div className="add-question-body">
                                            <FormControlLabel disabled control = 
                                                {
                                                    <ElementIconFactory questionType={ques.questionType}  disabled/>
                                                }
                                                label = {
                                                    (ques.questionType!=="text") ?
                                                    <div>
                                                        <Button onClick={()=>{addOption(index)}} 
                                                                size="small" 
                                                                style={{textTransform: 'none', color: "#4285f4", fontSize:"13px", fontWeight:"600"}}>
                                                                Add Option
                                                        </Button>
                                                    </div> : null
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
             </div>
         </div>
          </div>
        </div>
      )}
      </Draggable>
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
                            <TextField 
                                type="text" 
                                className="survey-title" 
                                style={{color: "black"}} 
                                placeholder="Untitled survey"
                                defaultValue={props.dataSrc.current.name }
                                onChange={(e)=>{props.dataSrc.current.name = e.target.value}}>
                            </TextField> 
                        </div>
                    </div>

                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}>
                                        {questionsUI()}
                                        {provided.placeholder}
                                </div>
                            )} 
                        </Droppable>
                  </DragDropContext>

                </div>
            </div>
        </div>
    )
}

export default EditForm
