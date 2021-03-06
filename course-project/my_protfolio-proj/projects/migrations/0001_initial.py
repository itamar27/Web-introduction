# Generated by Django 3.0.4 on 2020-06-22 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('description', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='projects/images')),
                ('url', models.URLField(blank=True)),
            ],
        ),
    ]
