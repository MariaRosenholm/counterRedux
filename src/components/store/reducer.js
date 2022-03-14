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
      return { ...state, number: state.number + 1, even: evenNumber };
    case actionTypes.DELETEONE:
      state.even ? (evenNumber = false) : (evenNumber = true);
      if (state.number > 0) {
        clickedNumber = state.number - 1;
      } else {
        clickedNumber = 0;
      }
      return { ...state, number: clickedNumber, even: evenNumber };
    case actionTypes.ADDFIVE:
      return { ...state, number: state.number + 5, even: state.even };
    case actionTypes.DELETEFIVE:
      if (state.number > 4) {
        clickedNumber = state.number - 5;
      } else {
        clickedNumber = 0;
      }
      return { ...state, number: clickedNumber, even: state.even };
    case actionTypes.RESET:
      return { ...state, number: 0, even: true };
    default:
      return state;
  }
};

export default reducer;
