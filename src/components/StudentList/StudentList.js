import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import QRCode from 'qrcode.react';
import fire from "../../fire";


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
    color:'grey',
    marginTop:10,
    
};
const text2 ={
   
    justifyContent:'center',
    color:'grey',
    margin:30,
  
    
};
const text3 ={
   
    justifyContent:'center',
    color:'grey',
    margin:30,
    textAlign:'right'
  
    
};
const button ={
    marginLeft:30,
    width:100,
};



export default function MyClass ({Student}){

   const [handleToggle,setHandleToggle] = useState(false);


 
 



    return(
        <div>

        
            <Divider />
            <h5 style={text2}>{Student.name} <Divider vertical/> : {Student.matricnum}  </h5>
            <Divider />
             

                
        
          
      </div>
  
    );
        

}