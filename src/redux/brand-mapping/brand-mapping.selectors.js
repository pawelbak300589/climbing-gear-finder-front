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

export const selectBrandMappingData = (brandId, mappingId) => createSelector(
    [selectBrandMappingsList],
    (items) => items[brandId] && items[brandId].filter(item => item.id === Number(mappingId))[0]
);

export const selectIsLoading = createSelector(
    [selectBrandMappings],
    (brandMappings) => brandMappings.loading
);