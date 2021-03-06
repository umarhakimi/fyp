import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import QRCode from 'qrcode.react';
import fire from "../../fire";
import StudentService from './StudentService';


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
const button={
    marginLeft:15,
};



export default function StudentList ({Student}){

   const [handleToggle,setHandleToggle] = useState(false);
   const [getAttendance, setGetAttendance] = useState();


   var user = fire.auth().currentUser;
   function handleDelete() {
    const classdel= fire.database().ref('Students/'+user.uid + '/Class/' + Student.classcode + '_'+Student.section)
    const namedel= fire.database().ref('Classreff/' +Student.classcode+ "_"+Student.section+ '/studentlist/' + Student.matricnum)
    
    classdel.remove();
    namedel.remove();
    console.log(Student.classcode);
};



useEffect(() => {
    const inforef = fire.database().ref('Classreff/'+Student.classcode + '_'+Student.section+'/Attendance/'+Student.day+'_'+Student.month+'_'+Student.year+'/member');
    inforef.on("value",(snapshot) => {
        const myinfo = snapshot.val();
        console.log(snapshot);
        const getAttendance=[];
        for (let id in myinfo){
            getAttendance.push(myinfo[id]);
           
        }
        setGetAttendance(getAttendance);
        console.log(getAttendance.matricnum)
        console.log(Student.day);
    });
},[]);


    return(
        <div>
            <Panel style={panel} bordered shaded>
      
       
            <div>
                <h6>{Student.name} <Divider vertical/> {Student.matricnum}</h6>
            </div>

        

  

            </Panel>
        
      </div>
  
    );
        

}