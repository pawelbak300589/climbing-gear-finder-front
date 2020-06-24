const createBrandUrlFormData = (websites) => {
    return (
        {
            initial: {
                website_id: '',
                url: '',
            },
            form: {
                title: "Urls:",
                type: 'normal',
                elements: [
                    {
                        label: '',
                        name: 'website_id',
                        type: 'select',
                        options: websites,
                    },
                    {
                        label: '',
                        name: 'url',
                        type: 'text',
                        placeholder: 'New URL'
                    },
                ]
            },
            button: {
                text: 'Add new URL',
                variant: 'success',
            }
        }
    );
};


export default createBrandUrlFormData;