from rest_framework import serializers
from .models import UserInfo,Playlist
from songapi.serializers import SongSerializer
from django.contrib.auth.models import User

class PlayListSerializer(serializers.ModelSerializer):
    songs = SongSerializer(many=True, read_only=True) 
    class Meta:
        model=Playlist
        fields = ['id', 'name', 'songs', 'created_at']
class UserInfoSerializer(serializers.ModelSerializer):
    playlists = PlayListSerializer(many=True, read_only=True, source='playlist_set')  # Fetch user's playlists

    class Meta:
        model = UserInfo
        fields = ['id', 'user', 'first_name', 'second_name', 'playlists']  # E

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['username','password']
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']  # Automatically hashes the password
        )
        return user


