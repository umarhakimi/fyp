import React ,{useState} from "react";
import QRCode from 'qrcode.react';
import { Button, Divider, Header } from "rsuite";
import {Panel, Drawer} from 'rsuite';


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


function Attendance() {

    const umar='hakimi';
    const [handleAttendance, setHandleAttendance] = useState(false);


    return(
        <div>
            <Panel style={box} shaded>
                <Header>ClassaName</Header>     
                <Drawer size={'xs'} placement={'right'}
                show={handleAttendance}>
                <Drawer.Header>
                    <Drawer.Title>Group </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div>
                   
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}onClick={()=>setHandleAttendance(false)}>Closse</Button>
                </Drawer.Footer>
            </Drawer>        
            </Panel>
        </div>
      
    );
}

export default Attendance;