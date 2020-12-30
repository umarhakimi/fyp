import React, {useState,useEffect} from 'react';
import fire from "../../fire";
import StudentList from "../StudentList/StudentList";
import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg";

const outbox={
    padding:10,
    marginBottom:10,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    //backgroundImage:`url(${bg})`,
    backgroundColor:'lightblue',
};



const SLService=()=>{


    const [myClassList, setmyClassList] = useState();

    
    

    var user = fire.auth().currentUser;
    useEffect(() => {
        const myClassRef = fire.database().ref( 'Classref/' +Class.classcode + '_'+Class.section+ '/studentlist/'+Class.matricnum);
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
        <div>
          
                <Panel style={outbox} shaded>
                <h3>Profile</h3>
 
     
    
         {myClassList 
         ? myClassList.map((Class, index) => <StudentList Class={Class} key={index}/>)
        : ''}
        
        
</Panel>
          
            
      
      

        </div>
        
    )
}
export default SLService;