import { createSelector } from "reselect";

const selectBrandMappings = state => state.brandMappings;

export const selectBrandMappingsList = createSelector(
    [selectBrandMappings],
    (brandMappings) => brandMappings.items
);

export const selectBrandMappingsExist = (brandId) => createSelector(
    [selectBrandMappingsList],
    (items) => brandId in items
);

export const selectBrandMappingsByBrandId = (brandId) => createSelector(
    [selectBrandMappingsList],
    (items) => items[brandId]
);

export const selectIsLoading = createSelector(
    [selectBrandMappings],
    (brandMappings) => brandMappings.loading
);