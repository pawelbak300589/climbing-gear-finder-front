import { createSelector } from "reselect";

const selectBrands = state => state.brands;

export const selectBrandsList = createSelector(
    [selectBrands],
    (list) => list.brands
);