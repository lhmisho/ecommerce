(function () {
    var ProductManager = {
        title: 'Product Manager',
        description: 'Manage Products',
        default_values: {
            extra: {},
            settings: {}
        },
        settings_schema: {
            fields: [
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Title',
                    model: 'title'
                },
                {
                    type: 'richtext',
                    label: 'Description',
                    model: 'description'
                },
                {
                    type: 'select',
                    label: 'Select Category',
                    model: 'categoryId',
                    required: true,
                    values: JSON.parse(CATEGORIES)
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Promotional Category URL',
                    model: 'action_url'
                },
                {
                    type: 'checkbox',
                    label: 'Featured',
                    model: 'status',
                    default: false
                },
                {
                    type: 'checkbox',
                    label: 'Latest Arrival',
                    model: 'latest',
                    default: false
                }
            ]
        },
        config: {
            styles: [
                {id: 'default', name: 'Default'}
            ],
            preview(self, callback) {
                callback('List')
            }
        }
    };

    hyperEditor.register_block('manager', ProductManager)
})();