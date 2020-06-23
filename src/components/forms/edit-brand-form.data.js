const editBrandFormData = {
    initial: {
        name: '',
    },
    form: {
        title: "Edit Brand",
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
        text: 'Update brand',
        variant: 'primary',
    }
};

export default editBrandFormData;