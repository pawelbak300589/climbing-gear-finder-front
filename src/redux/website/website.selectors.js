import { createSelector } from "reselect";

const selectWebsites = state => state.websites;

export const selectWebsitesList = createSelector(
    [selectWebsites],
    (websites) => websites.items
);

export const selectIsLoading = createSelector(
    [selectWebsites],
    (websites) => websites.loading
);