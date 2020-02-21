import { RegisterUserName } from "../actionTypes/userTypes";

export const registerUserName = username => {
  return { type: RegisterUserName, payload: username };
};
