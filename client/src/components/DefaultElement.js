import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/auth";

const DefaultElement = ({ getCurrentProfile, loadUser, auth }) => {

  useEffect(() => {
    loadUser();
    getCurrentProfile();
  }, []);

  return <div>DEFAULT</div>;
};

DefaultElement.propTypes = {
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
})(DefaultElement);
