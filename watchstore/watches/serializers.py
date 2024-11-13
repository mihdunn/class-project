from rest_framework import serializers
from .models import Watch, Login, ContactUs

class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watch
        fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['username', 'password']

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['name', 'email', 'message', 'created_at']
        def create(self, validated_data):
            return ContactUs.objects.create(**validated_data)
