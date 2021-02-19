from django import forms
from oscar.apps.dashboard.catalogue import forms as base_forms
from django.core.exceptions import ValidationError
from oscar.core.loading import get_class, get_model
#
from treebeard.forms import movenodeform_factory

Category = get_model('catalogue', 'Category')
ProductClass = get_model('catalogue', 'ProductClass')
ProductAttribute = get_model('catalogue', 'ProductAttribute')


class ProductForm(base_forms.ProductForm):
    class Meta(base_forms.ProductForm.Meta):
        fields = [
            'title', 'upc', 'banner_image', 'short_description', 'description', 'delivery_text', 'is_discountable', 'delivery_return', 'seo_description', 'delivery_service',
            'structure', 'featured', 'new_arrival', 'delivery_available', 'warranty']


class ProductAttributesForm(base_forms.ProductAttributesForm):
    class Meta:
        model = ProductAttribute
        fields = ["name", "code", "type", "option_group", "required", "is_variant", "is_filterable"]

    def clean_is_filterable(self):
        is_filterable = self.cleaned_data.get('is_filterable', False)
        attr_type = self.cleaned_data.get('type')
        if is_filterable and attr_type != ProductAttribute.OPTION:
            self.add_error('type', 'Type must be option to be filterable')
        else:
            return is_filterable

    def clean_is_variant(self):
        is_filterable = self.cleaned_data.get('is_filterable', False)
        attr_type = self.cleaned_data.get('type')
        if is_filterable and attr_type != ProductAttribute.OPTION:
            self.add_error('type', 'Type must be option to be variant')
        else:
            return is_filterable


CategoryForm = movenodeform_factory(
    Category,
    fields=['name', 'description', 'image', 'category_icon'])
