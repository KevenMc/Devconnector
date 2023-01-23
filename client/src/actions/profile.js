import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { GET_PROFILE, PROFILE_ERROR, TOKEN } from "./types";
import {
  DASHBOARD,
  API_PROFILE_ME,
  API_PROFILE,
} from "../components/routing/paths";

import { dispatch } from "react";
import { bindActionCreators } from "redux";
import { setAlert } from "./alert";
import { useNavigate } from "react-router-dom";

//Get current user's profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    setAuthToken(localStorage[TOKEN]);
    const res = await axios.get(API_PROFILE_ME);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// /Create or update profile

export const createProfile =
  (FormData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(API_PROFILE, FormData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

      if (!edit) {
        history(DASHBOARD);
      }
    } catch (err) {
      console.log(err);

      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger", error.param ));
        });
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
