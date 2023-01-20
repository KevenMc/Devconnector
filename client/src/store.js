import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "./reducers/auth";

import alert from "./reducers/alert";

//const initialState = {};

const middleWare = [thunk];

const store = configureStore({
  reducer: { alert, auth },
});



export default store;