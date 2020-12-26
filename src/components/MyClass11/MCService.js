import React, {useState,useEffect} from 'react';
import fire from "../../fire";
import MyClass from "../MyClass11/MyClass";
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    backgroundImage:`url(${bg})`,
};



export default function MCService(){
    const [myClassList, setmyClassList] = useState();
 


    var user = fire.auth().currentUser;

   
 


    useEffect(() => {
        const myClassRef = fire.database().ref(  user.uid + '/Class/');
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            const myClassList=[];
            for (let ClassList in myClassF){
                myClassList.push(myClassF[ClassList]);
            }
            setmyClassList(myClassList);
        }); 


    },[]);

    return(
        <div>
            
     <div>{user.uid}</div>
        <Panel style={outbox} shaded>
            <h3>Profile</h3>
            
           

    
         {myClassList 
         ? myClassList.map((Class, index) => <MyClass Class={Class} key={index}/>)
        : ''}

        
       
          
            
        </Panel>
      

        </div>
        
    )
}
