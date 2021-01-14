import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Panel, Divider,Header, Button } from 'rsuite';
import fire from "../../fire";


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



export default function StudentService ({Info}){




    return(
        <div>
            <Panel style={panel} bordered shaded>
            <div>
                <h5>hai</h5>
            </div>
            </Panel>
        
      </div>
  
    );
        

}