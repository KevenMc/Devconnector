import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoutes from "./components/routing/PrivateRoutes";
import { HOME, LOGIN, REGISTER, DASHBOARD, PROFILES, POSTS} from "./components/routing/paths";


import "./App.css";

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />

        <Routes>
          <Route exact path={HOME} element={<Landing />} />
          <Route path="*" element />
        </Routes>

        <section className="container">
          <Alert />
          <Routes>
            <Route exact path={REGISTER} element={<Register />} />
            <Route exact path={LOGIN} element={<Login />} />

            {/* Logged in users only */}
            <Route element={<PrivateRoutes />}>
              <Route exact path={DASHBOARD} element={<Dashboard />} />
              <Route exact path={PROFILES} element={<Dashboard />} />
              <Route exact path={POSTS} element={<Dashboard />} />
            </Route>
            <Route />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};


export default App;
