import { createSelector } from "reselect";

const selectBrands = state => state.brands;

export const selectBrandsList = createSelector(
    [selectBrands],
    (brands) => brands.items
);

export const selectBrand = (brandId) => createSelector(
    [selectBrandsList],
    (items) => items.filter(item => item.id === Number(brandId))
);

export const selectBrandsForSelectInput = (brandsToExclude) => createSelector(
    [selectBrandsList],
    (items) => items.filter(item => !brandsToExclude.includes(item.id))
);

export const selectBrandsTotal = createSelector(
    [selectBrands],
    (brands) => brands.items ? brands.items.length : 0
);

export const selectIsLoading = createSelector(
    [selectBrands],
    (brands) => brands.loading
);