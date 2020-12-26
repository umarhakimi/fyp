import React, { useState } from "react";

import CreateClass from "./CreateClass2";
import { Panel, Divider,Header, Input } from 'rsuite';
import fire from "../fire";



const CCservice = () => {

    const [class1, setClass] = useState('');
    const [classcode, setClassCode] = useState('');
    const [semester, setSemester] = useState('');
    const [year, setYear] = useState('');

    const addOrEdit = obj =>{
        fire.child('Class').push(
            obj,
            err => {
                if(err)
                console.log(err)
            }
        )
    }

    return(
        <div>
            <CreateClass addOrEdit={addOrEdit} class1={class1} setClass={setClass} classcode={classcode} setClassCode={setClassCode} semester={semester} setSemester={setSemester} year={year} setYear={setYear}/>   
        </div>
    );
    }


export default CCservice;