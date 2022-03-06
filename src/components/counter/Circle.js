import React from "react";

const Circle = ({ number }) => {
  return (
    <div className="circleWrapper">
      <h1>Counter App</h1>
      <div id="circle">1{number}</div>
    </div>
  );
};

export default Circle;
