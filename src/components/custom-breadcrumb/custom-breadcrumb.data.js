export const brandsPageBreadcrumbItems = [
    {
        link: '/dashboard',
        text: 'Dashboard'
    },
    {
        link: '/brands',
        text: 'Brands'
    }
];

export const createBrandPageBreadcrumbItems = [
    ...brandsPageBreadcrumbItems,
    {
        link: '',
        text: 'Create New Brand'
    }
];

export const editBrandPageBreadcrumbItems = [
    ...brandsPageBreadcrumbItems,
    {
        link: '',
        text: 'Edit Brand'
    }
];

export const showBrandPageBreadcrumbItems = [
    ...brandsPageBreadcrumbItems,
    {
        link: '',
        text: 'Brand Details'
    }
];