# Generated by Django 4.0.5 on 2022-07-14 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ride', '0002_alter_copassengers_passenger_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='time',
            field=models.TimeField(),
        ),
    ]