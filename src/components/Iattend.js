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
    height:500,
    
    alignItems:'center'
}
const box={

    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
  };


function Iattend() {

    const umar='hakimi'


    return(
        <div>
            <Panel style={box} shaded>
                <Header>Class Name</Header>
                <QRCode style={QR}
      value={'Umar,' + umar}
    />
    <div>
            <Button style={text}>Create Attendance</Button>
            </div>
            </Panel>
        </div>
      
    );
}

export default Iattend;