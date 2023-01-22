import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 } from "uuid";

export const setAlert =
  (msg, alertType, param, timeout = 2000) =>
  (dispatch) => {
    var id = "alert";
    if(param) id = `${param}-danger`;
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, param, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 100);
  };
