import React, { useState, useEffect } from 'react';
import { Panel, Divider,Header, Button, Drawer, FormGroup, Input } from 'rsuite';
import fire from "../../fire";
import GroupService from './GroupService';
import {Alert } from 'rsuite';


const button={
    marginTop:10,
    align:'right'
}

const Group = (props) => {
    var user = fire.auth().currentUser;

    const {
        classcode, section, classname,
    } = props;


    const [handleCreate,setHandleCreate]=useState(false);
    const [groupname, setGroupName]=useState();
    const [getinfo, setgetinfo] = useState();
    const [getprofile,setgetprofile] = useState('');
    
    useEffect(() =>{
        const getName = fire.database().ref('Students/'+user.uid + '/profile');
        getName.once("value",(snapshot) =>{
    
            
            setgetprofile(snapshot.val());
       
           
        });
    },[]);
    
    function handleGroup() {
        const alert = Alert.success('New group has been created')
        const creategroup= fire.database().ref('Classreff/' + classcode + '_'+section+'/Group/'+groupname) 
        const adname= fire.database().ref('Classreff/' + classcode + '_'+section+'/Group/'+groupname+'/member/'+getprofile.matricnum) 

        const group = {
          gname:groupname,
          classcode:classcode,
          section:section,      
        }
        creategroup.set(group); 

        const autoname = {
            name:getprofile.name    
          }
          adname.set(autoname); 
    
    };



    

useEffect(() => {
    const inforef = fire.database().ref('Classreff/'+classcode + '_'+section+'/Group');
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
            <Panel  bordered shaded>
       
            {getinfo 
                            ? getinfo.map((Info, index) => <GroupService Info={Info} key={index}/>)
                        : ''}
    
            <Button style={button} color={'green'} onClick={()=>setHandleCreate(true)}>Create Group</Button>
        
            <Drawer size={'xs'} placement={'right'}
                show={handleCreate}>
                <Drawer.Header>
                    <Drawer.Title>{classname}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    
                <div>
                      
                  
                        <Input placeholder="Enter Group Name" value={groupname} onChange={value => setGroupName(value)}/>
                        <Button color={'green'} style={button} onClick={handleGroup}>Create</Button>
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button appearance="primary" color={"green"}onClick={()=>setHandleCreate(false)}>Close</Button>
                </Drawer.Footer>
            </Drawer>        

            </Panel>
      </div>
  
    );
        

}
  
export default Group;