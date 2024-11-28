
# project/urls.py
from django.contrib import admin
from django.urls import path, include  # import include function
from rest_framework import routers
from songapi import views  # import the views from your app
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
router = routers.DefaultRouter()
router=routers.DefaultRouter()
router.register(r'artist',views.ArtistViewset)
router.register(r'album',views.AlbumViewset)
router.register(r'song',views.SongViewset)

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Music App Backend!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home ),
    path('api/', include(router.urls)),  # include the app's URLs for API
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
