from django.db import models
from django.contrib.auth.models import User
from songapi.models import Song
class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=10)
    second_name = models.CharField(max_length=10)
    def __str__(self):
        return f"{self.FirstName} - {self.SecondName}"

class Playlist(models.Model):
    name=models.CharField(max_length=30)
    songs=models.ManyToManyField(Song ,related_name="playlists")
    user=models.ForeignKey(UserInfo,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.name} - {self.user.username}"
    

