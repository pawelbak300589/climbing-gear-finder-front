import { brandActionTypes } from "./brand.types";

export const createBrand = brand => ({
    type: brandActionTypes.CREATE_BRAND,
    payload: brand
});