import React from "react";
const Example4 = (props)=>{
    return(
        <>
        <h1>Props Example</h1>
        <h2>Props are immutable</h2>
        <h3>Props are used to pass data from one component to another</h3>
        <h4>Props are used to pass data from parent component to child component</h4>
        <h5>Props are used to pass data from child component to parent component</h5>
        <ul>
            <li>Props Name: {props.name}</li>
            <li>Props Marks: {props.marks}</li>
        </ul>    
        </>
    )
}
export default Example4;