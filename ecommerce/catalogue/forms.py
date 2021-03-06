from django import forms
from oscar.core.loading import get_model
from treebeard.forms import movenodeform_factory

Category = get_model('catalogue', 'Category')
Product = get_model('catalogue', 'Product')
ProductAttribute = get_model('catalogue', 'ProductAttribute')


class AttributeFilterForm(forms.Form):

    def __init__(self, categories, **kwargs):
        super().__init__(**kwargs)

        attributes = ProductAttribute.objects.filter(
            product_class__products__categories__in=categories,
            is_filterable=True).distinct()

        for attribute in attributes:
            choices = [(option.id, option.option) for option in attribute.option_group.options.all()]
            choices = [(None, f'Select a {attribute.name}')] + choices
            self.fields[attribute.code] = forms.ChoiceField(label=attribute.name, choices=choices, required=False)
            self.fields[attribute.code].widget.attrs['class'] = 'form-control col-md-3 selectField'
            # self.fields[attribute.code].widget.attrs['id'] = 'selectField'

