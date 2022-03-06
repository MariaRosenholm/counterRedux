import React from "react";

const Buttons = ({
  addOneHandler,
  addFiveHandler,
  removeOneHandler,
  removeFiveHandler,
  resetHandler,
}) => {
  return (
    <div className="buttons">
      <div className="buttonWrapper">
        <button onClick={addFiveHandler}>Add five</button>
        <button onClick={addOneHandler}>Add one</button>
        <button onClick={removeOneHandler}>Delete one</button>
        <button onClick={removeFiveHandler}>Delete five</button>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Buttons;
