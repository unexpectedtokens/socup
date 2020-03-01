import {
  RegisterUserName,
  ChallengeSucceededType
} from "../actions/actionTypes/userTypes";
import gameSettings from "../../GameSettings/settings";
import ChallengePicker from "../../helpers/ChallengePicker";
const InitialState = {
  user: {
    userName: "",
    level: { level: 1, xpNeededForNextLevel: 100 },
    experience: 0
  }
};

export default (state = InitialState, { type, payload }) => {
  console.log("reducing", type);
  switch (type) {
    case RegisterUserName:
      return { ...state, user: { ...state.user, username: payload } };
    //DEV REDUCER TO RESET THE STATE TO INITIAL STATE
    case "RESET":
      return {
        ...InitialState,
        user: { ...InitialState.user, experience: 0 }
      };
    //FOR WHEN THE USER COMPLETES A CHALLENGE
    case ChallengeSucceededType:
      if (state.user.level.level === 10) {
        return state;
      }
      if (state.user.experience + 25 >= state.user.level.xpNeededForNextLevel) {
        return {
          ...state,
          user: {
            ...state.user,
            level: gameSettings.levels.find(
              item => item.level === state.user.level.level + 1
            ),
            experience: 0
          }
        };
      } else {
        return {
          ...state,
          user: { ...state.user, experience: state.user.experience + 25 }
        };
      }
    default:
      return state;
  }
};
