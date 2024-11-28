from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)
    release_year = models.IntegerField(null=True, blank=True)
    artists = models.ManyToManyField(Artist, related_name="albums")

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=255)
    audio_path = models.FileField(upload_to='song/')
    album_art_path = models.ImageField(upload_to='song_album_art/')
    album = models.ForeignKey(Album, on_delete=models.SET_NULL, null=True, blank=True)
    artists = models.ManyToManyField(Artist, related_name="songs")
    release_date = models.DateField()

    def __str__(self):
        return self.title
