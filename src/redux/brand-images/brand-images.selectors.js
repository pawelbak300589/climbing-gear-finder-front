import { createSelector } from "reselect";

const selectBrandImages = state => state.brandImages;

export const selectBrandImagesList = createSelector(
    [selectBrandImages],
    (brandImages) => brandImages.items
);

export const selectBrandImageExist = (brandId) => createSelector(
    [selectBrandImagesList],
    (items) => brandId in items
);

export const selectBrandImageByBrandId = (brandId) => createSelector(
    [selectBrandImagesList],
    (items) => items[brandId]
);

export const selectBrandImageData = (brandId, imageId) => createSelector(
    [selectBrandImagesList],
    (items) => items[brandId] && items[brandId].filter(item => item.id === Number(imageId))[0]
);

export const selectIsLoading = createSelector(
    [selectBrandImages],
    (brandImages) => brandImages.loading
);