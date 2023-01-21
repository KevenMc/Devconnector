import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoutes from "./components/routing/PrivateRoutes";
import { HOME, LOGIN, REGISTER, DASHBOARD} from "./components/routing/paths";
// import store from "./store";
import { useAuthCheck, loadUser } from "./actions/auth";

import "./App.css";

//Redux

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  console.log("USER LOADED PAGE");
  setAuthToken(localStorage.token);
}
//////

const App = () => {
  useAuthCheck();
  loadUser();

  return (
    <Router>
      <Fragment>
        <Navbar />

        <Routes>
          <Route exact path={HOME} element={<Landing />} />
          <Route path="*" element/>
        </Routes>

        <section className="container">
          <Alert />
          <Routes>
            <Route exact path={REGISTER} element={<Register />} />
            <Route exact path={LOGIN} element={<Login />} />
            <Route element={<PrivateRoutes/>}>
              <Route exact path={DASHBOARD} element={<Dashboard/>}/>
            </Route>
            <Route/>
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
