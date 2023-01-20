import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";
import Alert from "./components/layout/Alert";
// import store from "./store";
import {  useAuthCheck } from "./actions/auth";


import "./App.css";

//Redux

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  console.log("USER LOADED PAGE");
  setAuthToken(localStorage.token);
}

/////

//////


const App = () => {
  useAuthCheck();

  return (
    <Router>
      <Fragment>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>

        <section className="container">
          <Alert />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
