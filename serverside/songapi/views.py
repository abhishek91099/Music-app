from rest_framework import viewsets
from .serializers import SongSerializer,ArtistSerializer,AlbumSerializer
from .models import Song,Album,Artist

class SongViewset(viewsets.ModelViewSet):
    queryset=Song.objects.all()
    serializer_class=SongSerializer

class ArtistViewset(viewsets.ModelViewSet):
    queryset=Artist.objects.all()
    serializer_class=ArtistSerializer

class AlbumViewset(viewsets.ModelViewSet):
    queryset=Album.objects.all()
    serializer_class=AlbumSerializer
