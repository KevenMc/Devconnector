import {
  TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  USER_UNLOADED,
  USER_UNLOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem(TOKEN),
  isAuthenticated: false,
  loading: true,
  user: null,
  currentState: "START",
  lastState: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  const lastState = state.currentState;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        currentState: type,
        lastState: lastState,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        currentState: type,
        lastState: lastState,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case USER_UNLOADING:
    case USER_UNLOADED:
    case LOGOUT:
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentState: type,
        lastState: lastState,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        currentState: type,
        lastState: lastState,
      };

    default:
        console.log("SOME OTHER STATE")
      return state;
  }
}
