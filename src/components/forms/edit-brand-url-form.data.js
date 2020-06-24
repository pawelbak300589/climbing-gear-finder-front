const editBrandUrlFormData = (websites) => {
    return (
        {
            initial: {
                website_id: '',
                url: '',
            },
            form: {
                title: "",
                type: 'normal',
                elements: [
                    {
                        label: 'Website',
                        name: 'website_id',
                        type: 'select',
                        options: websites,
                    },
                    {
                        label: 'Brand URL',
                        name: 'url',
                        type: 'text',
                        placeholder: 'New URL'
                    },
                ]
            },
            button: {
                text: 'Update url',
                variant: 'primary',
            }
        }
    );
};

export default editBrandUrlFormData;