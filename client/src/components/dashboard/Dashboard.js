import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import { CREATE_PROFILE } from "../routing/paths";

import { DashboardActions } from "./DashboardActions";


const Dashboard = ({
  loadUser,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    loadUser();
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary"> Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user">Welcome {user && user.name}</i>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions/>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up your profile</p>
          <Link to={CREATE_PROFILE} className='btn btn-primary my-1'>Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { loadUser, getCurrentProfile })(
  Dashboard
);
