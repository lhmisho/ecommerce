# Generated by Django 2.0.13 on 2020-06-14 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0024_auto_20200614_0944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='delivery_text',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
    ]