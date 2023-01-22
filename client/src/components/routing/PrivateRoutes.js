import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { loadUser } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";

import { useEffect } from "react";

const PrivateRoutes = ({
  loadUser,
  getCurrentProfile,
  auth: { isAuthenticated },
  ...rest
}) => {
    useEffect(() => {
      loadUser();
      getCurrentProfile();
    }, []);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" {...rest} />;
  }
};

PrivateRoutes.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  loadUser,
  getCurrentProfile,
})(PrivateRoutes);
