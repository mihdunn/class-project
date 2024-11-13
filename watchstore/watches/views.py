from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView,CreateAPIView
from django.contrib.auth.hashers import make_password, check_password
from .models import Watch, Login, ContactUs
from .serializers import WatchSerializer, LoginSerializer, ContactUsSerializer


# Watch View
class WatchListCreateView(ListCreateAPIView):
    queryset = Watch.objects.all()
    serializer_class = WatchSerializer


# Login View
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            try:
                user = Login.objects.get(username=username)
                if check_password(password, user.password):
                    return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
            except Login.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Contact Us View
class ContactUsView(CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Saves data in the ContactUs model
            return Response({"message": "Your message has been received!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
