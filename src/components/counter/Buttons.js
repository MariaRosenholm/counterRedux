import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import * as actionTypes from "../store/actions";

const Buttons = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      <div className="buttonWrapper">
        <button
          onClick={() =>
            dispatch({ type: actionTypes.ADDFIVE, payload: number })
          }
          name="addFive"
        >
          Add five
        </button>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.ADDONE, payload: number })
          }
          name="addOne"
        >
          Add one
        </button>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.DELETEONE, payload: number })
          }
          name="deleteOne"
        >
          Delete one
        </button>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.DELETEFIVE, payload: number })
          }
          name="deleteFive"
        >
          Delete five
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: actionTypes.RESET, payload: number })}
        name="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Buttons;
