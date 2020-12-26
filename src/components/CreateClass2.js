import React, { useState } from 'react';
import {FormGroup, ControlLabel, Button, ButtonToolbar, Form, FormControl, HelpBlock} from 'rsuite';
import { Panel, Divider,Header, Input } from 'rsuite';
import bg from "./bg.jpg";
import 'rsuite/lib/styles/index.less';
import CCservice from "../components/CCservice";
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

const CreateClass =(props) => {
const {
    class1,
    classcode,
    semester,
    year,
    setClass,
    setClassCode,
    setSemester,
    setYear,
    } = props;
    
   
    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(setYear, setSemester, setClass, setClassCode)
    }
    return(
          <section className="CreateClass">
        <div className="CreateClassContainer">
            <label>Class Name</label>
            <input 
                  type="text" 
                  autoFocus
                  required value={class1} 
                  onChange={(e) => setClass(e.target.value)} />
                
            <label>Class Code</label>
                  <input type="text"
                  required 
                  value={classcode}
                  onChange={(e) => setClassCode(e.target.value)} />

            <label>Semester</label>
                  <input type="text"
                  required 
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)} />

            <label>Year</label>
                  <input type="text"
                  required 
                  value={year}
                  onChange={(e) => setYear(e.target.value)} />

            <div className="btnContainer">
            
                 <button onClick={handleFormSubmit}>CreateClass</button>

            </div>         
         </div>
         </section>
  
    );
    
}
export default CreateClass;


