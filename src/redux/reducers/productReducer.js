import { ActionTypes } from "../constants/actions-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Sadik",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    //break;

    default:
      return state;

    //break;
  }
};
