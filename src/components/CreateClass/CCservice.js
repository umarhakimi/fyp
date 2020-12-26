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
  
  
  var user = fire.auth().currentUser;
  
  
  function handleForm() {
    const classRef= fire.database().ref(user.uid + '/Class/' + classcode ).child(section)
    const createRef= fire.database().ref('Classref/' +classcode).child(section)
    const addName= fire.database().ref('Classref/' +classcode+ "/"+section+ '/studentlist/' + matricnum)
    
    const createclass = {
      classname,
      classcode,
      section,
      matricnum,
    }
    classRef.set(createclass);
  
    const reff = {
      creator:user.uid,
    }
    createRef.set(reff);

    const adname = {
      matricnum:matricnum,
      name:user.uid,
  
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