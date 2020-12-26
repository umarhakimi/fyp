import React  from "react";
import {FormControl, FormGroup, ControlLabel, ButtonToolbar, Button} from "rsuite";
import {Navbar, Container, Header, Content, FlexboxGrid, Panel, Form } from 'rsuite';
import Navigation from './Nav';
import {NavLink, Switch, Route, BrowserRouter as Router} from "react-router-dom";


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
    <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input 
                  type="text" 
                  autoFocus
                  required value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
                
                  <label>Password</label>
                  <input type="password"
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
            <div className="btnContainer">
            
                 <button onClick={handleLogin}>Signin</button>

            </div>         
         </div>
         </section>
  );
  };
  export default Login;