import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { REMOVE_ALERT } from "../../actions/types";
import { dispatch } from "react";


const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
  }
  alerts.forEach((alert) => {
    if (!document.getElementById(alert.id)) {
      const alertdiv = document.createElement("div");
      alertdiv.setAttribute("class", `alert alert-${alert.alertType}`);
      alertdiv.setAttribute("id", alert.id);
      alertdiv.innerText = alert.msg;

      const addAlert = document.getElementById(alert.param);
      if (addAlert) {
        addAlert.after(alertdiv);

         setTimeout(() => alertdiv.remove(), 4000);
      }
    } 
  });
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
