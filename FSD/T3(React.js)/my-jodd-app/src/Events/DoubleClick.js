import React from "react";
const DoubleClick=()=>{
    const handleChange=(e)=>{
        alert("Clicked")
    }
    return(
        <center>
            <button onDoubleClick={handleChange}>Click ME</button>
        </center>
    )
}
export default DoubleClick