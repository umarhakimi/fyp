import React, { useState } from 'react';
import {FormGroup, ControlLabel, Button, ButtonToolbar, Form, FormControl, HelpBlock} from 'rsuite';
import { Panel, Divider,Header, Input } from 'rsuite';
import bg from "../bg.jpg";
import fire from "./fire";



const small={
   
    width:1000,
    marginLeft:250,
    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
};
const text ={
    display:'flex',
    justifyContent:'center',
    color:'Black'
    
};
const button ={
    
    color:'green',
    
};

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    backgroundImage:`url(${bg})`,
};


  
  

class CreateClass (props) React.Component {
  const {classname, setClassName} =useState("");
  const {classcode, setClassCode} =useState("");
  const {semester, setSemester} =useState("");
  const {year, setYear} =useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    fire.database().ref('Class')
    const class{
      classname,
      classcode,
      semester,
      year,
     
  }
  classRef.push(Class);
    render(){
    return(
        <div>
            <Panel style={outbox} shaded>
            <h3>Create Class</h3>
            
            <a><Panel shaded style={small} >
                <h6 style={text}>Class Info</h6>
                <Form fluid>
    <FormGroup>
      <ControlLabel>Class</ControlLabel>
      <FormControl name="classname" value={classname} onChange={(e)=> setClassName(e.target.value)}/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Class Code</ControlLabel>
      <FormControl name="classcode"  value={classcode} onChange={(e)=> setClassCode(e.target.value)}/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Semester</ControlLabel>
      <FormControl name="semester"  value={semester} onChange={(e)=> setSemester(e.target.value)}/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Year</ControlLabel>
      <FormControl name="year" required value={year} onChange={(e)=> setYear(e.target.value)}/>
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button color={"green"} appearance="primary" onSubmit={handleSubmit}>Create</Button>

      </ButtonToolbar>
    </FormGroup>
  </Form>

                </Panel></a>
                
            </Panel>
          
      </div>
  
    );
}        
}
export default CreateClass;