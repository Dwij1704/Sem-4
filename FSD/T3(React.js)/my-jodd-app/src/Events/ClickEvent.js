import React from "react";
const ClickEvent=()=>{
    const myStyle={color :'red',
                    backgroundColor :'yellow'};

    const handleChange=()=>{
        document.body.style.backgroundColor='Blue'
        alert("Hello")
    }
    return(
        <>
        <center>
            <button style={myStyle} onClick={handleChange} id="a1">Click Me!</button>
        </center>
        </>
    )
}
export default ClickEvent