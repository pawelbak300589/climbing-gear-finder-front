import { createSelector } from "reselect";

const selectBrandUrls = state => state.brandUrls;

export const selectBrandUrlsList = createSelector(
    [selectBrandUrls],
    (brandUrls) => brandUrls.items
);

export const selectBrandUrlExist = (brandId) => createSelector(
    [selectBrandUrlsList],
    (items) => brandId in items
);

export const selectBrandUrlByBrandId = (brandId) => createSelector(
    [selectBrandUrlsList],
    (items) => items[brandId]
);

export const selectBrandUrlData = (brandId, urlId) => createSelector(
    [selectBrandUrlsList],
    (items) => items[brandId] && items[brandId].filter(item => item.id === Number(urlId))[0]
);

export const selectIsLoading = createSelector(
    [selectBrandUrls],
    (brandUrls) => brandUrls.loading
);