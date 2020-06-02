import { createSelector } from "reselect";

const selectAlerts = state => state.alerts;

export const selectAllAlerts = createSelector(
    [selectAlerts],
    (alerts) => alerts.items
);

export const selectAlertsNumber = createSelector(
    [selectAllAlerts],
    (alerts) => alerts.items.length
);