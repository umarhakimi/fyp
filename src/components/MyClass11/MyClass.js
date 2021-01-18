import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import StudentList from "../StudentList/StudentList";
import QRCode from 'qrcode.react';
import fire from "../../fire";
import Group from "../Group/Group"
import Attendance from "../Class/Attendace/Attendace"
import Test from '../Test/testAttend';

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
    justify:'center'
};
const button1 ={
    width:100,
   
};




export default function MyClass ({Class}){

   const [handleToggle,setHandleToggle] = useState(false);
   const [handleAttendance, setHandleAttendance] = useState(false);
   const [handleAttendance2, setHandleAttendance2] = useState(false);
   const [handleGroup,setHandleGroup] = useState(false);
   const [getname3,setgetname3] = useState([]);
   const [getstudent3, setgetstudent3] = useState();
   const [test, settest]=useState(Class.classcode); 
   const [classcode, setClassCode] = useState('');
   const [section, setSection] = useState(''); 
   const [matricnum, setMatricNum] = useState('');
   const [getAttendance,setGetAttendance] = useState('');

   

   useEffect(() =>{
    const getName = fire.database().ref('Classreff/' +Class.classcode + '_'+Class.section+ '/Creatordetail');
    getName.once("value",(snapshot) =>{

        const getname3=[];
        setgetname3(snapshot.val());
        console.log(getname3.creator)
    });
},[]);

var user = fire.auth().currentUser;

useEffect(() => {
    const getstudent = fire.database().ref( 'Classreff/' +Class.classcode + '_'+Class.section+ '/studentlist');
    getstudent.on("value",(snapshot) => {
        const getstudent2 = snapshot.val();
      
        const getstudent3=[];
        for (let id in getstudent2){
            getstudent3.push(getstudent2[id]);
           
        }
        setgetstudent3(getstudent3);
        console.log(getstudent3[1])
    });
},[]);



function copyFbRecord() {    
    const getData = fire.database().ref('Classreff/' +Class.classcode + '_'+Class.section+ '/studentlist');
    const putData= fire.database().ref('Classreff/' +Class.classcode+ "_"+Class.section+ '/Attendance/'+DD+'_'+MM+'_'+YY+'/member')
    const putStatus= fire.database().ref('Classreff/' +Class.classcode+ "_"+Class.section+ '/Attendance/'+DD+'_'+MM+'_'+YY)

 

    return new Promise((resolve, reject) => {
         getData.once('value').then(snap => {
              return putData.set(snap.val());
         }).then(() => {
              console.log('Done!');
              resolve();
         }).catch(err => {
            
              reject();
           
         });
         const reff = {
            day:DD,
            month:MM,
            year:YY,
            classcode:Class.classcode,
            section:Class.section,
          }
          putStatus.set(reff);

      
    });
}

useEffect(() => {
    const inforef = fire.database().ref('Classreff/'+Class.classcode + '_'+Class.section+'/Attendance');
    inforef.on("value",(snapshot) => {
        const myinfo = snapshot.val();
  
        const getAttendance=[];
        for (let id in myinfo){
            getAttendance.push(myinfo[id]);
           
        }
        setGetAttendance(getAttendance);
      
    });
},[]);


var [date,setDate] = useState(new Date());
let DD= date.getDate();
let MM = date.getMonth()+1;
const YY = date.getFullYear();


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
                show={handleAttendance2}>
                <Drawer.Header>
                    <Drawer.Title>{Class.classname}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div><Iattend classcode={Class.classcode} section={Class.section} classname={Class.classname}/></div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button color={"green"} style={button} onClick={()=>setHandleAttendance2(false)}>Close</Button>  
                </Drawer.Footer>
            </Drawer>        

            
            <Drawer
                show={handleAttendance}>
                <Drawer.Header>
                    <Drawer.Title>{Class.classname}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div>
             {getAttendance 
                            ? getAttendance.map((Info, index) => <Attendance Info={Info} key={index} />)
                        : ''}
                     
                        </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleAttendance(false)}>Close</Button>
                    <Button color={"green"} style={button} onClick={()=>setHandleAttendance2(true)}>Create</Button>  
              
                </Drawer.Footer>
            </Drawer>        

            
            <Divider vertical />

            <Button color={"green"} style={button} onClick={()=>setHandleToggle(true)}>Participant</Button>
            <Drawer
                show={handleToggle}>
                <Drawer.Header>
                    <Drawer.Title>{Class.classname}</Drawer.Title>
                </Drawer.Header>
                    <Drawer.Body>
                        <div>
                        {getstudent3 
                            ? getstudent3.map((Student, index) => <StudentList Student={Student} key={index} />)
                        : ''}
                        </div>
                    </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleToggle(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>    

       


        <Divider vertical />
            <Button color={"green"} style={button} onClick={()=>setHandleGroup(true)}>Group</Button>    
            <Drawer
                show={handleGroup}>
                <Drawer.Header>
                    <Drawer.Title>{Class.classname}</Drawer.Title>
                </Drawer.Header>
                    <Drawer.Body>
                      <div>
                          <Group classcode={Class.classcode} section={Class.section} classname={Class.classname}/>
                      </div>
                    </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}style={button} onClick={()=>setHandleGroup(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>  

        <Divider vertical />

            
            </Panel>
                
        
          
      </div>
  
    );
        

}