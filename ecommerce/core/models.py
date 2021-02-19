from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from djangohyper.fields import HyperField
from django.utils.translation import gettext_lazy as _
import json
from ecommerce.catalogue.models import Product


class User(AbstractUser):
    pass


class Menu(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50, unique=True)
    content = models.TextField()

    def save(self, *args, **kwargs):
        # self.content = json.dumps(self.content)
        super(Menu, self).save()

    def get_absolute_url(self):
        return reverse('dashboard:extensions-edit-menu', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name


class CustomForm(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50, unique=True)
    content = models.TextField()

    def save(self, *args, **kwargs):
        self.content = json.dumps(self.content)
        super(CustomForm, self).save()

    def get_absolute_url(self):
        return reverse('dashboard:extensions-edit-form', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name


class CustomFormData(models.Model):
    form = models.ForeignKey(CustomForm, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    form_data = models.TextField()

    def __str__(self):
        return "Submited from {} form".format(self.form.name)


class Snippet(models.Model):
    title = models.CharField(max_length=100)
    code = models.CharField(max_length=100, unique=True)
    content = HyperField(default="[]", blank=True)

    def __str__(self):
        return self.title


class Seo(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True, default=None)
    kewword = models.CharField(max_length=200, blank=True, null=True, default=None)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)
    description = models.TextField(default=None, blank=True, null=True)
    og_title = models.CharField(default=None, max_length=100, null=True, blank=True)
    og_image = models.ImageField(_('Og Image'), upload_to='seo', blank=True, null=True, max_length=255, default=None)
    og_description = models.TextField(default=None, blank=True, null=True)

    def __str__(self):
        return self.title
