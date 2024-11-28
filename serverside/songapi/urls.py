from django.urls import path,include
from rest_framework.routers import DefaultRouter

from .views import SongViewset,ArtistViewset,AlbumViewset

router=DefaultRouter()
router.register(r'artist',ArtistViewset)
router.register(r'album',AlbumViewset)
router.register(r'song',SongViewset)

urlpattern=[
    path('api/', include(router.urls)),
]
