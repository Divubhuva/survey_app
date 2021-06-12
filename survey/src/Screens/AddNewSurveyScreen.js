import React, {useState} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import SubjectIcon from '@material-ui/icons/Subject'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import Radio from '@material-ui/core/Radio'
import ShortTextIcon from '@material-ui/icons/ShortText'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import { BsTrash } from 'react-icons/bs'
import Switch from '@material-ui/core/Switch'
import MoreVert from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'

function AddNewSurveyScreen() {
const [questions, setQuestions] = useState(
    [{ questionText: "How do you rate our services?" ,
       questionType: "radio",
       options : [
           {optionText: "Excellent"},
           {optionText: "Good"},
           {optionText: "Fair"},
           {optionText: "Poor"},
           {optionText: "Bad"}
       ],
       open: true,
       required: false
    }]
)

function questionsUI() {
    return questions.map((ques, index) => (
        <div>
            <Accordion expanded = {questions[index].open} className={questions[index].open ? 'add-border' : ""}>
                {/* <AccordionSummary aria-controls = "panelia-content"
                                  id = "panelia-header"
                                  emaluation = {1}
                                  style = {{width: "100%"}}>
                                      { questions[index].open ? (
                                          <div className="saved-question">
                                              <Typography style={{fontSize:"15px",
                                                                  fontWeight:"400",
                                                                  letterSpacing:'0.1px',
                                                                  lineHeight: '24px',
                                                                  paddingBottom: "8px"
                                                                }} >
                                                                    {index+1}.{questions[index].questionText}
                                              </Typography>
                                              {ques.options.map((op, j) => (
                                                  <div key={j} >
                                                      <div style={{display: 'flex'}}>
                                                          <FormControlLabel style={{marginLeft:"5px", marginBottom:"5px"}} disabled control={<input type={ques.questionType} 
                                                              color="primary" style={{marginRight:"3px"}} required={ques.type} />} label={
                                                                  <Typography style={{fontFamily:"Times New Roman', Times, serif",
                                                                                      fontSize:'13px',
                                                                                      fontWeight:'400',
                                                                                      letterSpacing: '0.2px',
                                                                                      lineHeight:'20px',
                                                                                      color: '#202124'}}>
                                                                      {ques.options[j].optionText}
                                                                  </Typography>
                                                              } 
                                                           />
                                                      </div>
                                                  </div>
                                              )
                                              )}
                                          </div>
                                      ): "" }
                </AccordionSummary> */}

                <div className="question-boxes">
                    <AccordionDetails className="add-question">
                        <div className="add-question-top">
                            <input type="text" className="question" placeholder="Question" value={ques.questionText}></input>
                            <CropOriginalIcon style={{color: "#5f6368"}} />
                            <Select className="select" style={{color: "#5f6368", fontSize: "13px"}}>
                                <MenuItem id="text" value="Text" ><SubjectIcon style={{marginRight:"10px"}} />Paragraph</MenuItem>
                                <MenuItem id="checkbox" value="Checkbox" ><CheckBoxIcon style={{marginRight:"10px", color: "#70757a"}} checked />Checkboxes</MenuItem>
                                <MenuItem id="radio" value="Radio" ><Radio style={{marginRight:"10px", color: "#70757a"}} checked />Multiple Choice</MenuItem>
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
                                   <input type="text" className="text-input" placeholder="option" value={ques.options[j].optionText}></input>
                               </div>

                               <CropOriginalIcon style={{color: "#5f6368"}} />
                               <IconButton aria-label="delete">
                                   <CloseIcon />
                               </IconButton>
                           </div>
                        )}

                        {ques.options.length < 5 ? (
                            <div className="add-question-body">
                                <FormControlLabel disabbled control = {
                                    (ques.questionType!=="text") ?
                                    <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    style={{marginLeft:"10px", marginRight:"10px"}} disabled /> :
                                    <ShortTextIcon style={{marginRight:"10px"}} />
                                } label = {
                                    <div>
                                        <input type="text" className="text-input" style={{fontSize:"13px", width:"60px"}} placeholder="Add other"></input>
                                        <Button size="small" style={{textTransform: 'none', color: "#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                                    </div>
                                }
                                />
                            </div>
                        ) : ""}

                        <div className="add-footer">
                            <div className="add-question-bottom">
                               <IconButton aria-label="copy" >
                                   <FilterNoneIcon />
                               </IconButton>
                               <IconButton aria-label="delete">
                                   <BsTrash />
                               </IconButton>
                                   <span style={{ color:"#5f6368", fontSize: "13px" }} > Required <Switch name="checked" color="primary" checked={false} /> </span> 
                               <IconButton>
                                    <MoreVert />
                               </IconButton>
                            </div>

                        </div>
                    </AccordionDetails>
                </div>
            </Accordion>
        </div>
    ))
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

export default AddNewSurveyScreen
