import React from "react";
import QRCode from 'qrcode.react';
import { Button, Divider, Header } from "rsuite";
import {Panel} from 'rsuite';


const text ={
    alignItems:'center',
    textAlign:'center '
}

const QR ={

    width:500,
    height:200,
   
    alignItems:'center'
}
const box={

    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
  };

function Iattend() {


    return(
        <div>
            <Panel style={box} shaded>
                <Header>Class Name</Header>
                <QRCode
      value="umar"
    />
    <div>
            <Button style={text}>Create Attendance</Button>
            </div>
            </Panel>
        </div>
      
    );
}

export default Iattend;