# Generated by Django 4.2.4 on 2023-08-31 03:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_rename_news_new'),
    ]

    operations = [
        migrations.AlterField(
            model_name='new',
            name='headline',
            field=models.CharField(max_length=150),
        ),
    ]