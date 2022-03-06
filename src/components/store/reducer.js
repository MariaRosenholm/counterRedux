import * as actionTypes from "./actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {};
    case actionTypes.REMOVE:
      return {};
    case actionTypes.ADDFIVE:
      return {};
    case actionTypes.REMOVEFIVE:
      return {};
    case actionTypes.RESET:
      return {};
    default:
      return state;
  }
};

export default reducer;
