const createBrandMappingFormData = {
    initial: {
        name: '',
    },
    form: {
        title: 'Name Mappings:',
        type: 'normal',
        elements: [
            {
                label: '',
                name: 'name',
                type: 'text',
                placeholder: 'New mapping text'
            }
        ]
    },
    button: {
        text: 'Add new mapping',
        variant: 'success',
    }
};

export default createBrandMappingFormData;