import React from "react";
import image from "../components/umar.jpg";

import { Avatar, Div, Panel, FlexboxGrid } from "rsuite";

const box={
  marginTop:50,
  marginLeft:10
}
const text={
    display: "flex",
    justifyContent: "left",
}
class Home extends React.Component {
    render(){
    return(

    
    
        <div style={box}>
        <div>
      <div bordered style={
        { 
          display: "flex",
          justifyContent: "center",width:('100%'), height:('100%'),
          alignSelf:'center',textAlign:"center", padding:'20'}}>
      <Panel bordered style={box} >
      <h3 style={text}>Umar Hakimi Zahabuddin</h3>
      <img style={{borderRadius:190, height:190, width:190, marginTop:20}} src={image} />
        <span>
          <Panel bordered>
            <h5>KICT</h5>
          </Panel>
        </span>
        <h4>1714851</h4>
        <h4>KICT</h4>
        <div>
          <h5 style={text}>Email:</h5>
        </div>
      </Panel>
        
        </div>

        

        </div>
    </div>
        
        
    
    );
}        
}
export default Home;