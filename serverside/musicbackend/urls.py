"""
URL configuration for musicbackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# project/urls.py
from django.contrib import admin
from django.urls import path, include  # import include function
from rest_framework import routers
from songapi import views  # import the views from your app
from rest_framework import routers
router = routers.DefaultRouter()
router=routers.DefaultRouter()
router.register(r'artist',views.ArtistViewset)
router.register(r'album',views.AlbumViewset)
router.register(r'song',views.SongViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # include the app's URLs for API
]
