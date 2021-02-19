from django.contrib import admin
from .models import Menu, CustomForm, CustomFormData, Snippet, User, Seo
from django.contrib.admin import ModelAdmin
from django.contrib.auth.admin import UserAdmin

admin.site.register(Menu)
admin.site.register(CustomForm)
admin.site.register(CustomFormData)
admin.site.register(Snippet)
admin.site.register(Seo)


class CustomeUserAdmin(UserAdmin):
    model = User


admin.site.register(User, CustomeUserAdmin)
