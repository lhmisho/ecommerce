"""ecommerce URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from oscar.app import application
from oscarapi.app import application as api
from rest_framework import routers

from ecommerce.catalogue import views
from ecommerce.core import views as core_views
from ecommerce.core.api.views import CategoryProductsView
from ecommerce.core.views import CustomFormDataSubmit

router = routers.DefaultRouter()

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
    path('hyperEditor/', include('djangohyper.urls')),
    path('api/', api.urls),
    path('admin/', admin.site.urls),
    path('autocomplete/', core_views.autocomplete),
    path('', application.urls),

    path('api/fetchProduct/<int:pk>', CategoryProductsView.as_view(), name='category'),
    path('latest/', views.LatestArivalView.as_view(), name='latest'),

    path('forms/<int:pk>/<str:mail_to>/<str:subject>/submit/', CustomFormDataSubmit.as_view(),
         name='submit-custom-form'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
