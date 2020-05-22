import { createSelector } from "reselect";

const selectBrands = state => state.brands;

export const selectBrandsList = createSelector(
    [selectBrands],
    (brands) => brands.items
);

export const selectBrandsTotal = createSelector(
    [selectBrands],
    (brands) => brands.items ? brands.items.length : 0
);

export const selectIsLoading = createSelector(
    [selectBrands],
    (brands) => brands.loading
);