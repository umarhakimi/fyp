import React from 'react';
import 'rsuite/lib/styles/index.less';
import CreateClass from "../CreateClass/CreateClass";
import { useState, useEffect } from 'react';
import fire from "../../fire";
import {Alert } from 'rsuite';

const CCService = () => {
  const [classname, setClassName] = useState('');
  const [classcode, setClassCode] = useState('');
  const [section, setSection] = useState(''); 
  const [matricnum, setMatricNum] = useState('');
  const [creator, setCreator] = useState('');
  const [studentlist] = useState ('');
  const [getname3,setgetname3] = useState('');
  const [getname4,setgetname4] = useState('');
  
  
  var user = fire.auth().currentUser;


  useEffect(() =>{
    const getName = fire.database().ref('Students/'+user.uid + '/profile');
    getName.once("value",(snapshot) =>{

        
        setgetname3(snapshot.val());
      
  
    });
},[]);

useEffect(() =>{
  const getNames = fire.database().ref('Classreff/CCUB 3603_1/studentlist/1714851');
  getNames.once("value",(snapshot) =>{

      
      setgetname4(snapshot.val());
 
     console.log(getname4.status);
  });
},[]);

  function handleForm() {
    const alert = Alert.success('New class has been created')
    const classRef= fire.database().ref('Students/'+user.uid + '/Class/' + classcode + '_'+section)
    const createRef= fire.database().ref('Classreff/' + classcode + '_'+section+'/Creatordetail')
    const addName= fire.database().ref('Classreff/' +classcode+ "_"+section+ '/studentlist/' + matricnum)

    const addattend= fire.database().ref('Attendreff/')
    
    const createclass = {
      classname,
      classcode,
      section,
      matricnum,
  
    }
    classRef.set(createclass);
  
    const reff = {
      creator:user.uid,
      cname:getname3.name,

  
    }
    createRef.set(reff);

    const adname = {
      matricnum:matricnum,
      name:getname3.name,
      classcode:classcode,
      section:section,
      status:"INSTRUCTOR"
  
    }
    addName.set(adname);

    const addAttend = {
      class:''
    }
    addattend.set(addAttend);
    console.log(getname3.name)
    console.log(getname3.matricnum)
};


  return(
  
    <div>
   
      <CreateClass 
      classname={classname} 
      setClassName={setClassName} 
      classcode={classcode} 
      setClassCode={setClassCode}
      section={section}
      setSection={setSection}
      matricnum={matricnum}
      setMatricNum={setMatricNum} 
      handleForm={handleForm}
       />
      
    
      
    </div>
  );
  }
export default CCService;