const editBrandFormData = {
    initial: {
        name: '',
        url: '',
    },
    form: {
        title: "Edit Brand",
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
        text: 'Update brand',
        variant: 'primary',
    }
};

export default editBrandFormData;