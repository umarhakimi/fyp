import React, {useState,useEffect} from 'react';
import image from "../components/umar.jpg";
import { Panel, Divider,Header } from 'rsuite';
import bg from "../components/Class/bg.jpg";
import fire from "../fire";

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
   // backgroundImage:`url(${bg})`,
   backgroundColor:'#199591'
};
const header={
    textAlign:'center',
    color:'white'
  };


const Home = () =>  {
    
    const [getname3, setgetname3] = useState('');

    
    

    var user = fire.auth().currentUser;

    
    useEffect(() =>{
        const getName = fire.database().ref('Students/'+user.uid + '/profile');
        getName.on("value",(snapshot) =>{
    
            const getname3=[];
            setgetname3(snapshot.val());
            console.log(getname3.email);
      
        });
    },[]);

    return(
        <div>
            <Panel style={outbox} shaded>
            <h3 style={header}>Profile</h3>
            
            <Panel shaded style={small} >
                <h6 style={text}>{getname3.name} | LEVEL 3</h6>
                <img style={{marginLeft:30,marginBottom:40, borderRadius:120, height:130, width:120, marginTop:20, display:'flex', alignItems:'center'}} src={getname3.profileimg} />
                <h6 style={{marginLeft:79,color:'grey'}}>{getname3.course}</h6>
            
                </Panel>
                <Divider vertical/>
                <Panel shaded style={{backgroundColor:'white'}}>
                    <p>Name: {getname3.name}</p>  <p><span>Email </span>:</p>
			         <ul>
                         <li><p>{getname3.email}</p></li>
			         </ul>
                    <p>Matric Number: {getname3.matricnum}</p> 
                </Panel>
            </Panel>
          
      </div>
  
    );
}        

export default Home;