import { ActionTypes } from "../constants/action-types";

export const addCheckout = (product) => {
  return {
    type: ActionTypes.ADD_CHECKOUT,
    payload: product,
  };
};
