import axios from "axios";
import { setAlert } from "./alert";
import {
  TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_UNLOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load user

export const loadUser = () => async (dispatch) => {
  if (localStorage[TOKEN]) {
    setAuthToken(localStorage[TOKEN]);
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
      return true;
    } catch (err) {
      console.log(err);

      dispatch({
        type: AUTH_ERROR,
      });
    }
  } else {
    dispatch({ type: USER_UNLOADED });
  }
  return false;
};

///Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/users", body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

///Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout /clear profile

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};
