import { ActionTypes } from "../constants/actions-types";

const initialState = {
  products: [],
};

// In payload we recice the data from the server
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    //break;

    default:
      return state;

    //break;
  }
};
