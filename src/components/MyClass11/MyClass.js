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



export default function MyClass ({Class}){
    
    
    
 


    return(
        <div>
         
            
            <a><Panel shaded style={small} >
            <h6 style={text}>{Class.classname}</h6>
            <h5>{Class.classcode}</h5>
            <Button color={"green"} style={button} >Student</Button>    
            </Panel></a>
                
      
          
      </div>
  
    );
        

}