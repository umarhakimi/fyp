import React,{useState} from "react";
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


const Iattend = (props) => {
    const {
        classcode, section, classname,
    } = props;
    const [latitude, setLatitude] =useState('')
    const [longitude, setLongitude] =useState('')

    var [date,setDate] = useState(new Date());
    let DD= date.getDate();
    let MM = date.getMonth()+1;
    const YY = date.getFullYear();

        const position=[];
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
    
    return(
        <div>
            <Panel style={box} shaded>
                <Header>Class Name</Header>
                <QRCode style={QR}
      value={classcode+','+section+','+classname+','+DD+','+MM+','+YY+','+latitude+','+longitude}
    />
    <div>
            <Button style={text}>Create Attendance</Button>
            </div>
            </Panel>
        </div>
      
    );
}

export default Iattend;