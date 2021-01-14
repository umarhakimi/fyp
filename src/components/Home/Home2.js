import React from 'react';
import image from "../../components/umar.jpg";
import { Panel, Divider,Header } from 'rsuite';
//import bg from "../components/Class/bg.jpg"
import fire from "../../fire";

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

};

const Home = (props) => {
    var user = fire.auth().currentUser;

    const {
        name, matricnum, course, email,
    } = props;
    return(
        <div>
            
            <Panel shaded style={small} >
                <h6 style={text}>{name} </h6>
                <img style={{marginLeft:170,marginBottom:40, borderRadius:120, height:130, width:120, marginTop:20, display:'flex', alignItems:'center'}} src={image} />
                <h6 style={{marginLeft:115,color:'grey'}}>{course}</h6>
            
                </Panel>
                <Divider vertical/>
                <Panel shaded style={{backgroundColor:'white'}}>
                    <p>Name: {name}</p>  <p><span>Email </span>:</p>
			         <ul>
			         	<li><p>{email}</p></li>
			         </ul>
                    <p>Matric Number: {matricnum}</p> 
                </Panel>
      </div>
  
    );
}        

export default Home;