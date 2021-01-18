import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import QRCode from 'qrcode.react';
import fire from "../../fire";
import StudentService from '../StudentList/StudentService';
import Test2 from '../Test/test2';

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



export default function Test ({Student}){

   const [handleToggle,setHandleToggle] = useState(false);
   const [getAttendance, setGetAttendance] = useState();

//classcode matricnum section name status

useEffect(() => {
    const inforef = fire.database().ref('Classreff/'+Student.classcode + '_'+Student.section+'/Attendance');
    inforef.on("value",(snapshot) => {
        const myinfo = snapshot.val();
        console.log(snapshot);
        const getAttendance=[];
        for (let id in myinfo){
            getAttendance.matricnum=Student.matricnum
            getAttendance.push(myinfo[id]);
           
        }
        setGetAttendance(getAttendance);
        console.log(getAttendance.matricnum)
    });
},[]);

    return(
        <div>
            <Panel style={panel} bordered shaded>
      
            
            <Button color={'green'} onClick={()=>setHandleToggle(true)}>View</Button>
            <Drawer.Title>{Student.name}</Drawer.Title>
            <Drawer
                show={handleToggle}>
                <Drawer.Header>
                   
                </Drawer.Header>
                    <Drawer.Body>
                        <div>
                        {getAttendance 
                            ? getAttendance.map((Student, index) => <Test2 Student={Student} key={index} matricnum/>)
                        : ''}
                        </div>
                    </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleToggle(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>    
       
            <div>
                
            </div>

        

  

            </Panel>
        
      </div>
  
    );
        

}