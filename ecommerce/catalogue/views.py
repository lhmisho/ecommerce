from oscar.apps.catalogue.views import ProductCategoryView as CoreProductCategoryView, ProductDetailView
from oscar.core.loading import get_model
from .forms import AttributeFilterForm
from datetime import datetime
from datetime import timedelta
from django.views.generic.list import ListView
from ecommerce.core.models import Seo

Category = get_model('catalogue', 'Category')
Product = get_model('catalogue', 'Product')
ProductAttr = get_model('catalogue', 'ProductAttribute')


class ProductDetailView(ProductDetailView):

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        prod = self.object
        seo = Seo.objects.filter(product=prod).first()
        context['seo'] = seo
        return context


class ProductCategoryView(CoreProductCategoryView):

    def get_context_data(self, **kwargs):
        context = super(ProductCategoryView, self).get_context_data(**kwargs)
        context['filter_form'] = AttributeFilterForm(self.get_categories())
        # context['category'] = catetory
        return context

    def get_template_names(self):
        if self.request.is_ajax():
            self.template_name = 'catalogue/category_grid_ajax.html'
        return super().get_template_names()

class LatestArivalView(ListView):
    model = Product
    template_name = 'catalogue/browse.html'
    context_object_name = "products"
    paginate_by = 12

    def get_queryset(self):
        return Product.objects.filter(date_created__gte=(datetime.now()-timedelta(days=5)))