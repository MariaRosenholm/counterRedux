import * as actionTypes from "./actions";

const initialState = {
  number: 0,
  even: true,
};

const reducer = (state = initialState, action) => {
  let evenNumber;
  let clickedNumber;
  switch (action.type) {
    case actionTypes.ADDONE:
      state.even ? (evenNumber = false) : (evenNumber = true);
      return {
        number: action.payload,
        even: evenNumber,
      };
    case actionTypes.DELETEONE:
      state.even ? (evenNumber = false) : (evenNumber = true);
      if (state.number > 0) {
        clickedNumber = action.payload;
      } else {
        clickedNumber = 0;
      }
      return {
        number: clickedNumber,
        even: evenNumber,
      };
    case actionTypes.ADDFIVE:
      return {
        number: action.payload,
        even: state.even,
      };
    case actionTypes.DELETEFIVE:
      if (state.number > 4) {
        clickedNumber = action.payload;
      } else {
        clickedNumber = 0;
      }
      return {
        number: clickedNumber,
        even: state.even,
      };
    case actionTypes.RESET:
      return {
        number: action.payload,
        even: true,
      };
    default:
      return state;
  }
};

export default reducer;
