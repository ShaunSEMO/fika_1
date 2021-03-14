from django.conf.urls import url
from . import views
from django.urls import path

app_name = 'platform'

urlpatterns = [
    path('platforms/', views.platformApi, name='PlatformAPI'),
    path('platforms/<int:id>', views.platformApi, name='PlatformAPI'),
]
