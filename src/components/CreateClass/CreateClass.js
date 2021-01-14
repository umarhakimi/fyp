import React  from "react";
import {FormControl, FormGroup, ControlLabel, ButtonToolbar, Button} from "rsuite";
import {Navbar, Container, Header, Content, FlexboxGrid, Panel, Form, Alert } from 'rsuite';
import bg from "../bg.jpg";

import {NavLink, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import 'rsuite/lib/styles/index.less';


const box={

  width:1000,
  marginLeft:250,
  justifyContent:'center',
  marginTop:70,
  backgroundColor:'white',
  
};
const outbox={
  padding:10,
  height:877,
  marginBottom:10,
  marginRight:50,
  marginTop:20,
  marginLeft:20,
  //backgroundImage:`url(${bg})`,
  backgroundColor:'#27ae60',

};

const text ={
  display:'flex',
  justifyContent:'center',
  color:'grey'
  
};

const CreateClass = (props) =>  {

      const {
        classname, 
        setClassName, 
        classcode, 
        setClassCode, 
        section,
        setSection,
        matricnum,
        setMatricNum,
        handleForm,
      
    
       } = props;

      return (
    <Router>
    <Switch>    
    <div >

    <Panel style={outbox} shaded>
    <h3>Create Class</h3>
           
            <Panel style={box} bordered>
              <h4 style={text}>Create Class</h4>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>Class Name</ControlLabel>
                  <FormControl
                  type="text" 
                  autoFocus
                  required value={classname} 
                  onChange={value => setClassName(value)} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Class Code</ControlLabel>
                  <FormControl type="text"
                  required value={classcode}
                  onChange={value=> setClassCode(value)} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Section</ControlLabel>
                  <FormControl type="text"
                  required value={section}
                  onChange={value=> setSection(value)} />
                </FormGroup>  
                <FormGroup>
                  <ControlLabel>Matric Number</ControlLabel>
                  <FormControl type="text"
                  required value={matricnum}
                  onChange={value=> setMatricNum(value)} />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button color='green' onClick={handleForm} >Create</Button>
                   

                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
       
    </Panel>
  </div>
   </Switch>
  </Router>
      );
    }
  
  
  export default CreateClass;