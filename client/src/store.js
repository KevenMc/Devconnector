import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import alert from "./reducers/alert";

const initialState = {};

const middleWare = [thunk];

const store = configureStore({
  reducer: { alert }
});



export default store;