import { ActionTypes } from "../constants/action-types";

const initialState = {
  cart: [],
  isLoading: false,
};

const bagReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ActionTypes.GET_MYCART_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_MYCART_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default bagReducer;
