import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const Circle = () => {
  const number = useSelector((state) => state.number);
  const even = useSelector((state) => state.even);
  const [clickedNumber, setClickedNumber] = useState();
  const [evenOdd, setEvenOdd] = useState();

  useEffect(() => {
    setClickedNumber(number);
    setEvenOdd(even);
  }, [number, even]);

  return (
    <div className="circleWrapper">
      <h1>Counter App</h1>
      <div id="circle" className={evenOdd ? "even" : "odd"}>
        {clickedNumber}
      </div>
    </div>
  );
};

export default Circle;
