import React, { useState, useEffect } from 'react';
import { Panel, Divider,Header, Button, Drawer, } from 'rsuite';
import fire from "../../fire";
import GroupList from "../Group/GroupList";



const panel ={
    marginTop:10
};



export default function GroupService ({Info}){

    var user = fire.auth().currentUser;

    const [getprofile,setgetprofile] = useState('');
    const [handleView,setHandleView]=useState(false);
    const [getinfo, setgetinfo] = useState();

    useEffect(() =>{
        const getName = fire.database().ref('Students/'+user.uid + '/profile');
        getName.once("value",(snapshot) =>{
    
            
            setgetprofile(snapshot.val());
       
           
        });
    },[]);
    



    function handleJoin() {
   
    const joingroup= fire.database().ref('Classreff/' + Info.classcode + '_'+ Info.section+'/Group/'+Info.gname+'/1714851') 
    const group = {
      name:"umar hakimi",      
    }
    joingroup.set(group); 

};

console.log(getprofile.name);

useEffect(() => {
    const inforef = fire.database().ref('Classreff/'+Info.classcode + '_'+Info.section+'/Group/'+Info.gname+'/member');
    inforef.on("value",(snapshot) => {
        const myinfo = snapshot.val();
        console.log(snapshot);
        const getinfo=[];
        for (let id in myinfo){
            getinfo.push(myinfo[id]);
           
        }
        setgetinfo(getinfo);

    });
},[]);



    return(
        <div>
            <Panel bordered style={panel}>
           <h5>Group {Info.gname}<Divider vertical/><Button color={'green'} onClick={()=>setHandleView(true)} >View</Button></h5>
           <Drawer size={'xs'} placement={'right'}
                show={handleView}>
                <Drawer.Header>
                    <Drawer.Title>Group {Info.gname}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div>
                    {getinfo 
                            ? getinfo.map((Name, index) => <GroupList Name={Name} key={index}/>)
                        : ''}
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}onClick={()=>setHandleView(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>        
           </Panel>
      </div>
  
    );
        

}