from django.conf.urls import url
from . import views
from django.urls import path

app_name = 'app'

urlpatterns = [
    path('', views.redir, name='redir'),
    path('platforms', views.platforms, name='platforms'),
    path('platforms/<int:id>', views.routes, name='routes'),
]
