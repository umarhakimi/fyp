import React, {useState,useEffect} from 'react';
import fire from "../../fire";

export default function MCService.js(){
    const [myClassList, setmyClassList] = useState();

    useEffect(() => {
        const myClassRef = fire.database().ref("Class");
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            for (let id in myClassF){
                myClassList.push(myClassF[id]);
            }
            setmyClassList(myClassList)
        }) 


    },[]);

    return(
        <div>
         {myClassList ? myClassList.map((MyClass, index) => <Class MyClass={MyClass} key={index}/>}   
        </div>
    )
}
