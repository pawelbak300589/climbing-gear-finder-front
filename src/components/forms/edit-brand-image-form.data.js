const editBrandImageFormData = {
    initial: {
        src: '',
        alt: '',
    },
    form: {
        title: "",
        type: 'normal',
        elements: [
            {
                label: 'Image URL',
                name: 'src',
                type: 'text',
            },
            {
                label: 'Image Alt',
                name: 'alt',
                type: 'text',
            }
        ]
    },
    button: {
        text: 'Update image',
        variant: 'primary',
    }
};

export default editBrandImageFormData;