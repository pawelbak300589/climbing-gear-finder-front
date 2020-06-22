const createBrandImageFormData = {
    initial: {
        src: '',
    },
    form: {
        title: "Images:",
        type: 'normal',
        elements: [
            {
                label: '',
                name: 'src',
                type: 'text',
                placeholder: 'New image URL'
            },
        ]
    },
    button: {
        text: 'Add new image',
        variant: 'success',
    }
};

export default createBrandImageFormData;