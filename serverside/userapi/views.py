from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import UserInfo,Playlist
from .serializers import UserSerializer,PlayListSerializer,UserInfoSerializer
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self,request):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    @action(detail=False, methods=['post'], url_path='login')
    def login(self,request):
        username=request.data.get('username')
        password=request.data.get('passwowrd')
        user=authenticate(username=username,password=password)
        user_info_data='' 
        try:
            user_info = UserInfo.objects.get(user=user)  # Get additional user details
            user_info_serializer = UserInfoSerializer(user_info)  # Serialize user info
            user_info_data = user_info_serializer.data
        except UserInfo.DoesNotExist:
            user_info_data = {"message": "Additional user info not found."}
        if user is not None:
            refresh=RefreshToken.for_user(user)
            return Response(
                {
                    'refresh':str(refresh),
                    'access':str(refresh.access_token),
                    'user':user_info_data,
                    'message':'Login successful'
                },
                status=status.HTTP_200_OK)

        return Response({"error": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)
    @action(detail=False, methods=['post'], url_path='logout')
    def logout(self, request):
        refresh_token = request.data.get("refresh")
        if not refresh_token:
            return Response({"error": "Refresh token required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the token
            return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        

class PlayListViewset(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlayListSerializer

    # Define permissions dynamically
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:  # Allow anyone to view playlists
            permission_classes = [AllowAny]
        else:  # Restrict creation, update, and delete to authenticated users
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    @action(detail=True, methods=['post'])
    def createPlaylist(self, request):
        # Ensure the user is authenticated
        ser = self.get_serializer(data=request.data)
        if ser.is_valid():
            ser.save(user=request.user.userinfo)  # Save playlist for the logged-in user
            return Response(ser.data, status=status.HTTP_200_OK)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
