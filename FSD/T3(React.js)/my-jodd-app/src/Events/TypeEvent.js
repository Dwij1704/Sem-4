import React from "react";
const TypeEvent=()=>{
    const handleChange=(e)=>{
        console.log(e.target.value);
    }
    return(
        <input type="text" onChange={handleChange}></input>
    )
}
export default TypeEvent