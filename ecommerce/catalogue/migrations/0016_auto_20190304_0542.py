# Generated by Django 2.1.5 on 2019-03-04 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0015_product_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='productattribute',
            name='is_filterable',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='productattribute',
            name='is_variant',
            field=models.BooleanField(default=False),
        ),
    ]
