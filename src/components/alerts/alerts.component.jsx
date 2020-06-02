import React from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";
import Toast from "react-bootstrap/Toast";

import { selectAllAlerts } from "../../redux/alerts/alerts.selectors";

import { remove } from "../../redux/alerts/alerts.actions";

import './alerts.styles.scss';

const Alerts = ({ alerts, removeAlert }) => {
    return ReactDOM.createPortal(
        <div className="alerts">
            {
                alerts.map((alert) => (
                    <Toast className={`alert alert-${alert.type}`} key={alert.id} onClose={() => removeAlert(alert.id)}>
                        <Toast.Header>
                            <strong className="mr-auto">{alert.title}</strong>
                            <small>{moment(Number(alert.created)).fromNow()}</small>
                        </Toast.Header>
                        <Toast.Body>{alert.message}</Toast.Body>
                    </Toast>
                ))
            }
        </div>,
        document.querySelector('#alerts')
    );
};

const mapStateToProps = createStructuredSelector({
    alerts: selectAllAlerts
});

const mapDispatchToProps = dispatch => ({
    removeAlert: (alertId) => dispatch(remove(alertId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
