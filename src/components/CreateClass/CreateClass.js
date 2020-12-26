import React  from "react";
import {FormControl, FormGroup, ControlLabel, ButtonToolbar, Button} from "rsuite";
import {Navbar, Container, Header, Content, FlexboxGrid, Panel, Form } from 'rsuite';

import {NavLink, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import 'rsuite/lib/styles/index.less';


const box={
   
  width:2000,
  justifyContent:'center',
  marginTop:170,
  backgroundColor:'white',
  
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
    <div className="CreateClassPage" >
    <Container> 
    
      <Content>
        <FlexboxGrid style={box} justify="center" >
          <FlexboxGrid.Item colspan={10}>
            <div style={{lineHeight:100}}></div>
            <Panel header={<h3>Create Class</h3>} bordered>
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
                    <Button color='blue' onClick={handleForm}>Create</Button>
                   

                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
              
   
    </Container>
  </div>
   </Switch>
  </Router>
      );
    }
  
  
  export default CreateClass;