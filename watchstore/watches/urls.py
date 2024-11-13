from django.urls import path
from .views import WatchListCreateView, LoginView, ContactUsView

urlpatterns = [
    path('watches/', WatchListCreateView.as_view(), name='watch-list-create'),
    path('login/', LoginView.as_view(), name='login'),
    path('contact/', ContactUsView.as_view(), name='contact-us'),
]
