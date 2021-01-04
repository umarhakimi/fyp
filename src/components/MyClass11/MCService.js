import React, {useState,useEffect} from 'react';
import fire from "../../fire";
import MyClass from "../MyClass11/MyClass";
import { Panel, Divider,Header, Button, FlexboxGrid } from 'rsuite';
import bg from "../bg.jpg";

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

const MCService=()=>{


    const [myClassList, setmyClassList] = useState();

    
    

    var user = fire.auth().currentUser;
    useEffect(() => {
        const myClassRef = fire.database().ref( 'Students/'+user.uid + '/Class');
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            console.log(snapshot);
            const myClassList=[];
            for (let id in myClassF){
                myClassList.push(myClassF[id]);
               
            }
            setmyClassList(myClassList);

        });
    },[]);


 
    return(
        <div >
          <FlexboxGrid justify={'center'} style={outbox}>
                <Panel  just>
                <h3 style={header}>Profile</h3>
 
     
    
         {myClassList 
         ? myClassList.map((Class, index) => <MyClass Class={Class} key={index} />)
        : ''}
        
        
</Panel>
          
</FlexboxGrid>   
      
      

        </div>
        
    )
}
export default MCService;