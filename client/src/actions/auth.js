import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../store";

import { useEffect } from "react";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_UNLOADED,
  AUTH_ERROR,
  USER_UNLOADING,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load user

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Check for user on each click

export function useAuthCheck() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    const token = localStorage.getItem("token");

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
}

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
