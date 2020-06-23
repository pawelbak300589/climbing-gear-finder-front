const createBrandFormData = {
    initial: {
        name: '',
    },
    form: {
        title: "Create New Brand",
        type: 'normal',
        elements: [
            {
                label: 'Brand Name',
                name: 'name',
                type: 'text',
            }
        ]
    },
    button: {
        text: 'Create new brand',
        variant: 'success',
    }
};

export default createBrandFormData;