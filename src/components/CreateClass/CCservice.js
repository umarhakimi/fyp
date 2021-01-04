import React from 'react';
import 'rsuite/lib/styles/index.less';
import CreateClass from "../CreateClass/CreateClass";
import { useState, useEffect } from 'react';
import fire from "../../fire";

const CCService = () => {
  const [classname, setClassName] = useState('');
  const [classcode, setClassCode] = useState('');
  const [section, setSection] = useState(''); 
  const [matricnum, setMatricNum] = useState('');
  const [creator, setCreator] = useState('');
  const [studentlist] = useState ('');
  const [getname3,setgetname3] = useState('');
  
  
  var user = fire.auth().currentUser;


  useEffect(() =>{
    const getName = fire.database().ref('Students/'+user.uid + '/Profile');
    getName.once("value",(snapshot) =>{

        
        setgetname3(snapshot.val());
   
       
    });
},[]);


  function handleForm() {
    const classRef= fire.database().ref('Students/'+user.uid + '/Class/' + classcode + '_'+section)
    const createRef= fire.database().ref('Classref/' + classcode + '_'+section+'/creatordetails')
    const addName= fire.database().ref('Classref/' +classcode+ "_"+section+ '/studentlist/' + matricnum)
    
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
  
    }
    addName.set(adname);

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