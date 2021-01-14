import React, {useState,useEffect} from 'react';
import fire from "../../fire";
import MyClass from "../MyClass11/MyClass";
import { Panel, Divider,Header, Button, FlexboxGrid } from 'rsuite';
import bg from "../bg.jpg";
import Home from "../Home/Home2"

const outbox={
    padding:10,
    marginBottom:10,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    //backgroundImage:`url(${bg})`,
    backgroundColor:'#27ae60',
    justify:'center',
    width:'1500',
    shaded:'true',
 
};

const header={
    textAlign:'center',
    color:'white'
  };

const HService= () =>{


    const [getname3, setgetname3] = useState();

    
    

    var user = fire.auth().currentUser;

    
    useEffect(() =>{
        const getName = fire.database().ref('Students/'+user.uid + '/Profile');
        getName.once("value",(snapshot) =>{
    
            
            setgetname3(snapshot.val());
          
      
        });
    },[]);

 
    return(
        <div>
        <Panel style={outbox} shaded>
        <h3>{getname3.name}</h3>
        
        <div>

        </div>
        </Panel>
      
  </div>
        
    )
}
export default HService;