# Generated by Django 5.1.3 on 2024-11-20 18:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('genre', models.CharField(max_length=50)),
                ('release_year', models.IntegerField()),
                ('artists', models.ManyToManyField(related_name='albums', to='songapi.artist')),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('audio_path', models.FileField(upload_to='songs/')),
                ('album_art_path', models.ImageField(upload_to='album_art/')),
                ('release_date', models.DateField()),
                ('album', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='songapi.album')),
                ('artists', models.ManyToManyField(related_name='songs', to='songapi.artist')),
            ],
        ),
    ]
