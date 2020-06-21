const editBrandMappingFormData = {
    initial: {
        name: '',
    },
    form: {
        title: "",
        type: 'normal',
        elements: [
            {
                label: 'Mapping text',
                name: 'name',
                type: 'text',
            }
        ]
    },
    button: {
        text: 'Update mapping',
        variant: 'primary',
    }
};

export default editBrandMappingFormData;