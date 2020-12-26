import React from "react";
import {List} from "rsuite"

const data = ['Roses are red', 'Violets are blue', 'Sugar is sweet', 'And so are you'];

class Student extends React.Component {
    render(){
    return(
    <div>
        <List hover>
        {data.map((item, index) => (
            <List.Item key={index} index={index}>
            {item}
            </List.Item>
        ))}
        </List>
    </div>
    );
}        
}
export default Student;