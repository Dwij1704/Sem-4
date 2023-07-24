import React from "react";

const Example5 = (props) => {

  return (
    <>
      {Object.entries(props.car).map(([key, value]) => (
        key == "img" ? <img src={value}></img> :
          <p>{key}: {value}</p>
      ))}
    </>
  );
};

export default Example5;
