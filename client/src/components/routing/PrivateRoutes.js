import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" {...rest} />;
  }
};

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
