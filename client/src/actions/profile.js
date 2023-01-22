import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { GET_PROFILE, PROFILE_ERROR, TOKEN } from "./types";

import { dispatch } from "react";

//Get current user's profile

export const getCurrentProfile = () => async (dispatch) => {

  try {
    setAuthToken(localStorage[TOKEN]);
    const res = await axios.get("/api/profile/me");
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
