
import React from "react"
import { Link } from "react-router-dom"
import { EDIT_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE } from "../routing/paths";

export const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to={EDIT_PROFILE} className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to={ADD_EXPERIENCE} className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i> Add Experience
      </Link>
      <Link to={ADD_EDUCATION} className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
}