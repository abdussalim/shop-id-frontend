import { ActionTypes } from "../constants/action-types";
const initialState = {
  data: [],
};

// export const cartReducer = (state = initialState, action) => {
//   if (action.type === "ADD_TO_CART") {
//     return {
//       ...state,
//       data: [...state.data, action.payload],
//     };
//   } else {
//     return state;
//   }
// };

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BAG:
      return { ...state, data: payload.data.data };
    default:
      return state;
  }
};

const initialStates = {
  data: [],
  isLoading: false,
};

export const todosReducer = (state = initialStates, action) => {
  if (action.type === ActionTypes.ADD_TODO_PENDING) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === ActionTypes.ADD_TODO_SUCCESS) {
    return {
      ...state,
      data: [...state.data, action.payload],
      isLoading: false,
    };
  } else {
    return state;
  }
};