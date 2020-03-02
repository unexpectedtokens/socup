import {
  RegisterUserName,
  ChallengeSucceededType,
  PickNewChallenge
} from "../actions/actionTypes/userTypes";
import gameSettings from "../../GameSettings/settings";
import { ChallengePicker, ModifierPicker } from "../../helpers/ChallengePicker";
const InitialState = {
  user: {
    userName: "",
    level: { level: 1, xpNeededForNextLevel: 100 },
    experience: 0,
    ChallengesComplete: 0,
    trophies: [...gameSettings.trophies]
  },
  curChallenge: ChallengePicker(),
  modifiers: ModifierPicker(),
  route: "Home"
};

export default (state = InitialState, { type, payload }) => {
  console.log("[reducing]", type);
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
      let newState = { ...state };
      if (state.user.level.level === 10) {
        newState = {
          ...state,
          user: {
            ...state.user,
            ChallengesComplete: state.user.ChallengesComplete + 1
          }
        };
      }
      if (state.user.experience + 25 >= state.user.level.xpNeededForNextLevel) {
        newState = {
          ...state,
          user: {
            ...state.user,
            level: gameSettings.levels.find(
              item => item.level === state.user.level.level + 1
            ),
            experience: 0,
            ChallengesComplete: state.user.ChallengesComplete + 1
          }
        };
      } else {
        newState = {
          ...state,
          user: {
            ...state.user,
            experience: state.user.experience + 25,
            ChallengesComplete: state.user.ChallengesComplete + 1
          }
        };
      }
      return {
        ...newState,
        user: {
          ...newState.user,
          trophies: newState.user.trophies.map(troph => {
            return {
              title: troph.title,
              goal: troph.goal,
              reached: eval(troph.reached) ? true : troph.reached
            };
          })
        }
      };
    case "SET_ROUTE":
      return { ...state, route: payload };
    case PickNewChallenge:
      return {
        ...state,
        curChallenge: ChallengePicker(
          state.curChallenge,
          state.user.level.level
        ),
        modifiers: ModifierPicker(state.user.level.level)
      };

    default:
      return state;
  }
};
