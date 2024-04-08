import { createStore } from "redux";
const initialState = {
  users: [],
  loggedInUser: null,
  products: [
    {
      id: 1,
      name: "Hammad",
      price: 4,
    },
    {
      id: 2,
      name: "Hamza",
      price: 5,
    },
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Register":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "Login":
      return {
        ...state,
        loggedInUser: action.playload,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
