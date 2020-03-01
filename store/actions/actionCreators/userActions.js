import {
  RegisterUserName,
  challengeSucceededType
} from "../actionTypes/userTypes";

export const registerUserName = username => {
  return { type: RegisterUserName, payload: username };
};
export const challengeSucceeded = () => {
  return { type: challengeSucceededType };
};
