import React from 'react';
import firebase from './Firebase';

import { Panel, Divider,Header, Button } from 'rsuite';
import bg from "../bg.jpg"
const small={
    width:1000,
    marginLeft:250,
    justifyContent:'center',
    marginTop:70,
    backgroundColor:'white',
    
};
const text ={
    display:'flex',
    display:'flex',
    justifyContent:'center',
    color:'Black'
    
};
const button ={
    margin:10,
};

const outbox={
    padding:10,
    height:877,
    marginRight:50,
    marginTop:20,
    marginLeft:20,
    backgroundImage:`url(${bg})`,
};

class MyClass extends React.Component {

    constructor(props) {
    
        super(props);
       
        this.state = {classlist : []}
        }
        
      componentDidMount() {
       
       
         
          firebase.database().ref("students-list").on("value", snapshot => {
            let classlistist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                classlist.push(snap.val());
            });
            this.setState({ classlist: classlist });
          });
        
        
    

    render(){
    return(
        <div>
            <Panel style={outbox} shaded>
            <h3>Your Classes</h3>
            
            <a><Panel shaded style={small} >
            {this.state.classlist.map(data => {
                <h6 style={text}>{data.ClassName}</h6>
            <h5 style={text}>{data.ClassCode}</h5>
                <Button color={"green"} style={button}>Student</Button>
                </Panel></a> 


            </Panel>
          
      </div>
  
    );
}        
}
export default MyClass;