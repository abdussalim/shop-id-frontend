import { ActionTypes } from "../constants/action-types";

const initialState = {
  product: [],
};

const checkoutReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.ADD_CHECKOUT) {
    return {
      product: action.payload,
    };
  }
};

export default checkoutReducer;
