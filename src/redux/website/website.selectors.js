import { createSelector } from "reselect";

const selectWebsites = state => state.websites;

export const selectWebsitesList = createSelector(
    [selectWebsites],
    (websites) => websites.items
);

export const selectWebsite = (websiteId) => createSelector(
    [selectWebsitesList],
    (items) => items.find(item => item.id === Number(websiteId))
);

export const selectWebsiteName = createSelector(
    [selectWebsite],
    (website) => website.name
);

export const selectIsLoading = createSelector(
    [selectWebsites],
    (websites) => websites.loading
);

export const selectWebsiteOptions = createSelector(
    [selectWebsitesList],
    (websites) => websites.map(({ id, name }) => ({
        value: id,
        text: name
    }))
);