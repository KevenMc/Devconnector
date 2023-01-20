import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  USER_UNLOADED,
  USER_UNLOADING,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  currentState:"START",
  lastState: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  const lastState = state.currentState;;
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

    case USER_UNLOADED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        currentState: type,

        lastState: lastState,
      };

    case USER_UNLOADING:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        currentState: type,

        lastState: lastState,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        currentState: type,
        lastState: lastState,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentState: type,

        lastState: lastState,
      };

    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentState: type,
        lastState: lastState,
      };

    default:
      return state;
  }
}
