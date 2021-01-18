import React ,{useState, useEffect} from "react";
import QRCode from 'qrcode.react';
import { Button, Divider, Header } from "rsuite";
import {Panel, Drawer} from 'rsuite';
import fire from "../../../fire";
import AttendanceList from "./AttendanceList";

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
    marginTop:20
};

function Attendance({Info}) {

    const umar='hakimi';
    const [getname3,setgetname3] = useState();
    const [getname2,setgetname2] = useState();
    const [getAttendance, setGetAttendance] = useState();
    const [handleView,setHandleView]=useState(false);

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
             
                   <Panel style={panel} bordered shaded >
           <h5>Date : {Info.day}/{Info.month}/{Info.year}<Divider vertical/><Button color={'green'} onClick={()=>setHandleView(true)} >View</Button></h5>
           <Drawer  placement={'right'}
                show={handleView}>
                <Drawer.Header>
                    <Drawer.Title>{Info.day}/{Info.month}/{Info.year} </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div>
                    {getAttendance 
                        ? getAttendance.map((Info, index) => <AttendanceList Info={Info} key={index} />)
                    : ''} 
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}onClick={()=>setHandleView(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>        
           </Panel>

            
        </div>
      
    );
}

export default Attendance;