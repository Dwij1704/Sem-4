# Generated by Django 4.2.4 on 2023-08-31 03:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='news',
            name='descp',
            field=models.TextField(),
        ),
    ]
