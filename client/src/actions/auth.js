import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../store";

import { useEffect } from "react";
import { setAlert } from "./alert";
import {
  TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_UNLOADED,
  AUTH_ERROR,
  USER_UNLOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load user

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
      try {
        //   const res = await axios.get("/api/auth");
        const res = { data: "e" };
        dispatch({ type: USER_LOADED, payload: res.data });
      } catch (err) {
        console.log(err);

        dispatch({
          type: AUTH_ERROR,
        });
      }
  }
  else{
    console.log("LOAD WITH NO USER")
    dispatch({ type: USER_UNLOADED });
  }


};

//Check for user on each click

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const token = localStorage.getItem(TOKEN);

    if (token) {
      dispatch({ type: USER_LOADED });
    } else {
      if (store.getState().auth.currentState === USER_LOADED) {
        dispatch({ type: USER_UNLOADING });
        window.location.href = "/";
      }
      dispatch({ type: USER_UNLOADED });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);


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
export const login =
  ( email, password ) =>
  async (dispatch) => {
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

  export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
  }