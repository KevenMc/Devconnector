import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import PrivateRoutes from "./components/routing/PrivateRoutes";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import {
  HOME,
  LOGIN,
  REGISTER,
  DASHBOARD,
  PROFILES,
  POSTS,
  CREATE_PROFILE,
  EDIT_PROFILE,
  ADD_EXPERIENCE,
  ADD_EDUCATION
} from "./components/routing/paths";


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
          <div id="alert"></div>
          <Routes>
            <Route exact path={REGISTER} element={<Register />} />
            <Route exact path={LOGIN} element={<Login />} />

            {/* Logged in users only */}
            <Route element={<PrivateRoutes />}>
              <Route exact path={DASHBOARD} element={<Dashboard />} />
              <Route exact path={PROFILES} element={<Dashboard />} />
              <Route exact path={POSTS} element={<Dashboard />} />
              <Route exact path={CREATE_PROFILE} element={<CreateProfile />} />
              <Route exact path={EDIT_PROFILE} element={<EditProfile />} />
              <Route exact path={ADD_EXPERIENCE} element={<AddExperience />} />
              <Route exact path={ADD_EDUCATION} element={<AddEducation />} />
            </Route>
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};


export default App;
