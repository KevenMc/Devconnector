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
  CLEAR_PROFILE,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem(TOKEN),
  isAuthenticated: false,
  loading: true,
  user: null,
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
        };
      } else {
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          user: payload,
        };
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
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
        profile: null,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem(TOKEN, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };



    default:
      return state;
  }
};

export default Auth;
