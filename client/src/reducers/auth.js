import {
  TOKEN,
  INIT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  USER_UNLOADED,
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
};

const Auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT:
      if (state.token) {
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
          currentState: type,
        };
      } else {
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          user: payload,
          currentState: type,
        };
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        currentState: type,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        currentState: type,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case USER_UNLOADED:
    case LOGOUT:
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentState: type,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        currentState: type,
      };

    default:
      return state;
  }
};

export default Auth;
