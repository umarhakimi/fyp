import React, { useState, useEffect } from 'react';
import { Panel, Divider,Header, Button, Drawer, } from 'rsuite';
import fire from "../../fire";




const panel ={
    marginTop:10
};



export default function GroupList ({Name}){

  

    return(
        <div>
            <Panel bordered style={panel}>
           <h5> {Name.name}</h5>
          
           </Panel>
      </div>
  
    );
        

}