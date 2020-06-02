export const createNewAlertId = (alerts) => {
    let highestAlertId = 1;
    if (alerts) {
        alerts.forEach(alert => {
            if (Number(alert.id) > highestAlertId) {
                highestAlertId = Number(alert.id);
            }
        });
    }

    return highestAlertId + 1;
};
