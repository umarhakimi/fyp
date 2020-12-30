import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import StudentList from "../StudentList/StudentList";
import QRCode from 'qrcode.react';
import fire from "../../fire";

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    //backgroundImage:`url(${bg})`,
    backgroundColor:'lightblue'
};

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



export default function MyClass ({Class}){

   const [handleToggle,setHandleToggle] = useState(false);
   const [handleAttendance, setHandleAttendance] = useState(false);
   const [getname3,setgetname3] = useState('');
   const [getstudent3, setgetstudent3] = useState();
 
   useEffect(() =>{
    const getName = fire.database().ref('Classref/' +Class.classcode + '_'+Class.section+ '/creatordetails');
    getName.once("value",(snapshot) =>{

        
        setgetname3(snapshot.val());
        
    });
},[]);



//useEffect(() =>{
  // const getName = fire.database().ref('Classref/' +Class.classcode + '_'+Class.section+ '/studentlist/'+Class.matricnum);
   //getName.on("value",(snapshot) =>{

        
     //  setgetstudent(snapshot.val());
        
    //});
//},[]);

useEffect(() => {
    const getstudent = fire.database().ref( 'Classref/' +Class.classcode + '_'+Class.section+ '/studentlist');
    getstudent.on("value",(snapshot) => {
        const getstudent2 = snapshot.val();
        console.log(snapshot);
        const getstudent3=[];
        for (let id in getstudent2){
            getstudent3.push(getstudent2[id]);
           
        }
        setgetstudent3(getstudent3);
        console.log(getstudent3);

    });
},[]);



    return(
        <div>
            <Panel shaded style={small} >
            <h4 style={text}>{Class.classname}</h4>
            <Divider />
            <h5 style={text2}>{Class.classcode} <Divider vertical/> INSTRUCTOR : {getname3.cname }  </h5>
            <Divider />
            <h5 style={text2}>SECTION {Class.section}</h5>

            <Button color={"green"} style={button} onClick={()=>setHandleAttendance(true)}>Attendance</Button>  
            <Drawer
                show={handleAttendance}>
                <Drawer.Header>
                    <Drawer.Title>Attendance</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <di>{<Iattend/>}</di>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleAttendance(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>        

            
            <Divider vertical />

            <Button color={"green"} style={button} onClick={()=>setHandleToggle(true)}>Student</Button>
            <Drawer
                show={handleToggle}>
                <Drawer.Header>
                    <Drawer.Title>Student List</Drawer.Title>
                </Drawer.Header>
                    <Drawer.Body>
                        <div>
                        {getstudent3 
                            ? getstudent3.map((Student, index) => <StudentList Student={Student} key={index}/>)
                        : ''}
         
                        </div>
                    </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleToggle(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>    

       


        <Divider vertical />
            <Button color={"green"} style={button} >etc</Button>    
            </Panel>
                
        
          
      </div>
  
    );
        

}