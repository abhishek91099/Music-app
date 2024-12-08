
# project/urls.py
from django.contrib import admin
from django.urls import path, include  # import include function
from rest_framework import routers
from songapi import views  # import the views from your app
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from userapi import views as userviews
router = routers.DefaultRouter()
router.register(r'artist',views.ArtistViewset)
router.register(r'album',views.AlbumViewset)
router.register(r'song',views.SongViewset)
router.register(r'playlist',userviews.PlayListViewset)
router.register(r'user',userviews.UserViewset)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Music App Backend!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home ),
    path('api/', include(router.urls)), 
       path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login: obtain access & refresh tokens
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),  # include the app's URLs for API
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
