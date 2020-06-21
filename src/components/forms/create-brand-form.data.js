const createBrandFormData = {
    initial: {
        name: '',
        url: '',
    },
    form: {
        title: "Create New Brand",
        type: 'normal',
        elements: [
            {
                label: 'Brand Name',
                name: 'name',
                type: 'text',
            },
            {
                label: 'Brand URL',
                name: 'url',
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