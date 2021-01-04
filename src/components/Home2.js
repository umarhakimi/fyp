import React from 'react';
import image from "../components/umar.jpg";
import { Panel, Divider,Header } from 'rsuite';
import bg from "../components/Class/bg.jpg"
const small={
    marginRight:100,
    width:500,
    display:'flex',
    justifyContent:'center',
    margin:70,
    backgroundColor:'white',
    
};
const text ={
    display:'flex',
    justifyContent:'center',
    color:'grey'
    
};

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    backgroundImage:`url(${bg})`,
};

class Home extends React.Component {
    render(){
    return(
        <div>
            <Panel style={outbox} shaded>
            <h3>Profile</h3>
            
            <Panel shaded style={small} >
                <h6 style={text}>UMAR HAKIMI ZAHABUDDIN | LEVEL 3</h6>
                <img style={{marginLeft:170,marginBottom:40, borderRadius:120, height:130, width:120, marginTop:20, display:'flex', alignItems:'center'}} src={image} />
                <h6 style={{marginLeft:115,color:'grey'}}>KULIYAH OF INFORMATION AND COMUNICATION TECHNOLOGY</h6>
            
                </Panel>
                <Divider vertical/>
                <Panel shaded style={{backgroundColor:'white'}}>
                    <p>Name: UMAR HAKIMI ZAHABUDDIN</p>  <p><span>Email </span>:</p>
			         <ul>
			         	<li><p>umarhakimiz@gmail.com</p></li>
			         	<li><p>umar.hz@live.iium.edu.my</p></li>
			         </ul>
                    <p>Matric Number: 1714851</p> 
                </Panel>
            </Panel>
          
      </div>
  
    );
}        
}
export default Home;