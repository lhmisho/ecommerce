# Generated by Django 2.0.13 on 2020-06-14 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0022_auto_20200614_0620'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='shot_description',
            field=models.CharField(blank=True, max_length=420, null=True),
        ),
    ]