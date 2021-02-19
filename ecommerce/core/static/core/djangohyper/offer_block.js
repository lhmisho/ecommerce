(function () {
    var OfferBlock = {
        title: 'Offer',
        description: 'Add Offer Block',
        default_values: {
            extra: {},
            settings: {}
        },
        settings_schema: {
            fields: [
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Offer Title',
                    model: 'offer_title'
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Offer Details',
                    model: 'offer_details'
                },
                {
                    type: 'select',
                    label: 'Select Offer',
                    model: 'offerId',
                    required: true,
                    values: JSON.parse(OFFERS)
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Promotional offer URL',
                    model: 'action_url'
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

    hyperEditor.register_block('offer', OfferBlock)
})();
