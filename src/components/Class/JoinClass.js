import React from 'react';
import {FormGroup, ControlLabel, Button, ButtonToolbar, Form, FormControl} from 'rsuite';
import { Panel, Divider,Header, Input } from 'rsuite';
import bg from "../bg.jpg"
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

class JoinClass extends React.Component {
    render(){
    return(
        <div>
            <Panel style={outbox} shaded>
            <h3>Create Class</h3>
            
            <a><Panel shaded style={small} >
                <h6 style={text}>Class Info</h6>
                <Form fluid>
    <FormGroup>
      <ControlLabel>Class Code</ControlLabel>
      <FormControl name="Class" />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Unique Code</ControlLabel>
      <FormControl name="Class Code"  />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Semester</ControlLabel>
      <FormControl name="Semester"  />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Year</ControlLabel>
      <FormControl name="Year"  />
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button color={"green"} appearance="primary">Join</Button>

      </ButtonToolbar>
    </FormGroup>
  </Form>

                </Panel></a>
                
            </Panel>
          
      </div>
  
    );
}        
}
export default JoinClass;