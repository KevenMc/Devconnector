import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

import { useAuthCheck, loadUser } from "../../actions/auth";

import { TOKEN } from '../../actions/types';
import setAuthToken from '../../utils/setAuthToken';

const Dashboard = ({ getCurrentProfile, loadUser, auth, profile}) => {
    // setAuthToken(localStorage[TOKEN]);

  // useEffect(() => {
  //   loadUser();
  //   getCurrentProfile();
  // },[]);

  return <div>Dashboard</div>
}

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps= state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { loadUser, getCurrentProfile })(
  Dashboard
);