from django.db import models
from oscar.apps.offer import abstract_models
from django.utils.translation import ugettext_lazy as _


class ConditionalOffer(abstract_models.AbstractConditionalOffer):
    banner = models.ImageField(_('Banner Image'), upload_to='images', blank=True, null=True, max_length=255,
                                     default=None)



from oscar.apps.offer.models import *  # noqa isort:skip
