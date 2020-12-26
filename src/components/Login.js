import React  from "react";
import {FormControl, FormGroup, ControlLabel, ButtonToolbar, Button} from "rsuite";
import {Navbar, Container, Header, Content, FlexboxGrid, Panel, Form } from 'rsuite';
import Navigation from './Nav';
import {NavLink, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import 'rsuite/lib/styles/index.less';


const box={
   
  width:2000,
  justifyContent:'center',
  marginTop:170,
  backgroundColor:'white',
  
};


const Login = (props) =>  {

      const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin,
        hasAccount,
        setHasAccount,
       } = props;
      return (
    <Router>
    <Switch>    
    <div className="LoginPage" >
    <Container> 
    
      <Content>
        <FlexboxGrid style={box} justify="center" >
          <FlexboxGrid.Item colspan={10}>
            <div style={{lineHeight:100}}></div>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                  type="email" 
                  autoFocus
                  required value={email} 
                  onChange={value => setEmail(value)} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password"
                  required value={password}
                  onChange={value=> setPassword(value)} />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button onClick={handleLogin}>Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
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
  
  
  export default Login;