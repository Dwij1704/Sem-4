import React from "react";
const DoubleClick=()=>{
    const handleChange=(e)=>{
        alert("Clicked")
    }
    return(
        <button onDoubleClick={handleChange}></button>
    )
}
export default DoubleClick