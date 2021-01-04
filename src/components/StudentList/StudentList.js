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
const panel ={
    marginTop:10
};



export default function StudentList ({Student}){

   const [handleToggle,setHandleToggle] = useState(false);


   var user = fire.auth().currentUser;
   function handleDelete() {
    const classdel= fire.database().ref('Students/'+user.uid + '/Class/' + Student.classcode + '_'+Student.section)
    const namedel= fire.database().ref('Classref/' +Student.classcode+ "_"+Student.section+ '/studentlist/' + Student.matricnum)
    
    classdel.remove();
    namedel.remove();
    console.log(Student.classcode);
};



    return(
        <div>
            <Panel style={panel} bordered shaded>
      
            <h7 style={text2}>{Student.name} <Divider vertical/> : {Student.matricnum} <Divider vertical/> <Button color={'red'}  onClick={handleDelete}>Leave</Button></h7>
            </Panel>
      </div>
  
    );
        

}