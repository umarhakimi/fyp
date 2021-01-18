import React,{useState} from "react";
import QRCode from 'qrcode.react';
import { Button, Divider, Header } from "rsuite";
import {Panel} from 'rsuite';
import fire from "../fire";

const text ={
    alignItems:'center',
    textAlign:'center ',
    
    marginTop:20,
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
    


        function copyFbRecord() {    
            const getData = fire.database().ref('Classreff/' +classcode + '_'+section+ '/studentlist');
            const putData= fire.database().ref('Classreff/' +classcode+ "_"+section+ '/Attendance/'+DD+'_'+MM+'_'+YY+'/member')
            const putStatus= fire.database().ref('Classreff/' +classcode+ "_"+section+ '/Attendance/'+DD+'_'+MM+'_'+YY)
        
         
        
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
                    classcode:classcode,
                    section:section,
                  }
                  putStatus.set(reff);
        
              
            });
        }

    return(
        <div>
            <Panel style={box} shaded>
                <Panel>
                <h5 style={text}>{classname}</h5>
                </Panel>
                <QRCode style={QR}
      value={classcode+','+section+','+classname+','+DD+','+MM+','+YY+','+latitude+','+longitude}
    />
    <div>
            <Button style={text} color={'green'} onClick={copyFbRecord}>Create Attendance</Button>
            </div>
            </Panel>
        </div>
      
    );
}

export default Iattend;