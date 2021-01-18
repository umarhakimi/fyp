import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
import {Drawer} from 'rsuite';
import Iattend from "../Iattend";
import QRCode from 'qrcode.react';
import fire from "../../fire";
import StudentService from '../StudentList/StudentService';


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



export default function Test2 ({Student}){


//classcode matricnum section name status




    return(
        <div>
            <Panel style={panel} bordered shaded>

                        <div>
                 <h6>{Student.day}{Student.matricnum}{Student.month}</h6>
                        </div>


            </Panel>
        
      </div>
  
    );
        

}