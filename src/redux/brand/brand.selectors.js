import { createSelector } from "reselect";

const selectBrands = state => state.brands;

export const selectBrandsList = createSelector(
    [selectBrands],
    (brands) => brands.items
);

export const selectIsLoading = createSelector(
    [selectBrands],
    (brands) => brands.loading
);