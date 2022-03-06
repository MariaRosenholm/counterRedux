import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import * as actionTypes from "../store/actions";

const Buttons = () => {
  const OGnumber = useSelector((state) => state.number);
  const [number, setNumber] = useState(OGnumber);
  const [actionType, setActionType] = useState(actionTypes.RESET);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.name === "addFive") {
      setNumber(number + 5);
      setActionType(actionTypes.ADDFIVE);
    } else if (e.target.name === "addOne") {
      setNumber(number + 1);
      setActionType(actionTypes.ADDONE);
    } else if (e.target.name === "deleteOne") {
      number < 1 ? setNumber(0) : setNumber(number - 1);
      setActionType(actionTypes.DELETEONE);
    } else if (e.target.name === "deleteFive") {
      number < 5 ? setNumber(0) : setNumber(number - 5);
      setActionType(actionTypes.DELETEFIVE);
    } else if (e.target.name === "reset") {
      setNumber(0);
      setActionType(actionTypes.RESET);
    }
  };

  useEffect(() => {
    dispatch({
      type: actionType,
      payload: number,
    });
  }, [number, dispatch, actionType]);

  return (
    <div className="buttons">
      <div className="buttonWrapper">
        <button onClick={changeHandler} name="addFive">
          Add five
        </button>
        <button onClick={changeHandler} name="addOne">
          Add one
        </button>
        <button onClick={changeHandler} name="deleteOne">
          Delete one
        </button>
        <button onClick={changeHandler} name="deleteFive">
          Delete five
        </button>
      </div>
      <button onClick={changeHandler} name="reset">
        Reset
      </button>
    </div>
  );
};

export default Buttons;
