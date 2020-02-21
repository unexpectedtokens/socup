import { RegisterUserName } from "../actions/actionTypes/userTypes";

const InitialState = {
  user: {
    userName: "User"
  }
};

export default (state = InitialState, { type, payload }) => {
  switch (type) {
    case RegisterUserName:
      return { ...state, user: { username: payload } };
    default:
      return state;
  }
};
