import { createSelector } from "reselect";

const selectBrands = state => state.brands;

export const selectBrandsList = createSelector(
    [selectBrands],
    (brands) => brands.items
);

export const selectBrand = (brandId) => createSelector(
    [selectBrandsList],
    (items) => items.find(item => item.id === Number(brandId))
);

export const selectBrandsForSelectInput = (brandsToExclude) => createSelector(
    [selectBrandsList],
    (items) => items.filter(item => !brandsToExclude.includes(item.id))
);

export const selectIsLoading = createSelector(
    [selectBrands],
    (brands) => brands.loading
);

export const selectPagination = createSelector(
    [selectBrands],
    (brands) => brands.pagination
);

export const selectCurrentPage = createSelector(
    [selectPagination],
    (pagination) => pagination.current_page
);

export const selectBrandsTotal = createSelector(
    [selectPagination],
    (pagination) => pagination.total
);

export const selectItemsPerPage = createSelector(
    [selectPagination],
    (pagination) => pagination.per_page
);

export const selectSearch = createSelector(
    [selectBrands],
    (brands) => brands.search
);