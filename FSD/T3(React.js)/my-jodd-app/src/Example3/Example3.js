import React from "react";
const Example3 = () => {
    const curr_Date=new Date().toLocaleDateString();
    const curr_Time=new Date().toLocaleTimeString()
    return(
        <>
        <h1>Dwij Patel</h1>
        <b>{curr_Date}</b>
        <p>{curr_Time}</p>
        </>
    )
}
export default Example3;