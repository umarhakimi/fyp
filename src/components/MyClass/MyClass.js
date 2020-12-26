import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import IAttend from "../Iattend";


const small={
    width:1000,
    marginLeft:250,
    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
};
const text ={
    display:'flex',
    display:'flex',
    justifyContent:'center',
    color:'Black'
    
};
const button ={
    margin:10,
};

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    backgroundImage:`url(${bg})`,
};

export default function MyClass ({Class}){
    
    
    
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
      }
      close() {
        this.setState({
          show: false
        });
      }
      toggleDrawer() {
        this.setState({ show: true });
      }
    
    render(){


    return(
        <div>
            <Panel style={outbox} shaded>
            <h3>Profile</h3>
            
            <a><Panel shaded style={small} >
            <h6 style={text}>{Class.classname}</h6>
            <h5>{Class.classcode}</h5>
                <Button color={"green"} style={button} >Student</Button>
                <Drawer
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Scan the QR code for the Attendance</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body><IAttend/>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={this.close} appearance="primary">Confirm</Button>
            <Button onClick={this.close} appearance="subtle">Cancel</Button>
          </Drawer.Footer>
        </Drawer>
                <Button color={"green"} style={button} onClick={this.toggleDrawer}>Attendance</Button>
                </Panel></a>
                
            </Panel>
          
      </div>
  
    );
        
}
