from django.db import models
from oscar.apps.catalogue import abstract_models
from djangohyper.fields import HyperField
from django.utils.translation import gettext_lazy as _


class Product(abstract_models.AbstractProduct):
    """
    customizing AbstrucProduct model for adding some additional field
    """
    banner_image = models.ImageField(_('Banner Image'), upload_to='images', blank=True, null=True, max_length=255,
                                     default=None)
    description = HyperField(default="[]", blank=True)
    featured = models.BooleanField(default=False)
    new_arrival = models.BooleanField(default=False)
    seo_description = models.CharField(max_length=180, blank=True, null=True, default='')
    short_description = models.TextField(blank=True, null=True)
    delivery_text = models.TextField(blank=True, null=True)
    delivery_service = models.CharField(max_length=150, blank=True, null=True, default='')
    delivery_available = models.BooleanField(default=False)
    delivery_return = models.CharField(max_length=100, blank=True, null=True)
    warranty = models.CharField(max_length=220, blank=True, null=True, default='Warranty not available')


class ProductAttribute(abstract_models.AbstractProductAttribute):
    is_variant = models.BooleanField(default=False)
    is_filterable = models.BooleanField(default=False)


class Category(abstract_models.AbstractCategory):
    category_icon = models.ImageField(_('Icon'), upload_to='categories', blank=True, null=True, max_length=255,
                                      default=None)


from oscar.apps.catalogue.models import *  # noqa isort:skip
