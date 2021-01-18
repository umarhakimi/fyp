import React ,{useState, useEffect} from "react";
import QRCode from 'qrcode.react';
import { Button, Divider, Header } from "rsuite";
import {Panel, Drawer} from 'rsuite';
import fire from "../../../fire";

const text ={
    alignItems:'center',
    textAlign:'center '
}

const QR ={

    width:500,
    height:500,
   
    alignItems:'center'
}
const box={

    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
  };

  const panel ={
    marginTop:10
};


function AttendanceList({Info}) {

    const umar='hakimi';
    const [getname3,setgetname3] = useState();
    const [getname2,setgetname2] = useState();
    const [getAttendance, setGetAttendance] = useState();

    useEffect(() => {
        const inforef = fire.database().ref('Classreff/'+Info.classcode + '_'+Info.section+'/Attendance/'+Info.day+'_'+Info.month+'_'+Info.year+'/member');
        inforef.on("value",(snapshot) => {
            const myinfo = snapshot.val();
            console.log(snapshot);
            const getAttendance=[];
            for (let id in myinfo){
                getAttendance.push(myinfo[id]);
               
            }
            setGetAttendance(getAttendance);
            console.log(getAttendance.matricnum)
        });
    },[]);

    
    return(
        <div>
             <Panel style={panel} shaded bordered>
                       <div>
                       <h7>{Info.name}:<Divider vertical/><Divider vertical/>{Info.status}</h7>
                       </div>
                       
                   </Panel>

            
        </div>
      
    );
}

export default AttendanceList;