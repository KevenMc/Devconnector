import React from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { DASHBOARD } from "../routing/paths";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create developer profile, portfolio, share posts and get help from
            others
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign up
            </Link>
            <Link to="/login" className="btn">
              Log in
            </Link>
          </div>
          <div className="buttons"></div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
