from django.conf.urls import url
from . import views
from django.urls import path
from django.views.generic import TemplateView

app_name = 'app'

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='redir'),
    path('platforms', views.platforms, name='platforms'),
    path('platforms/<str:name>/routes', views.show_routes, name='show_routes'),
    path('platforms/<str:name>/routes/<int:id>', views.routes, name='routes'),
]
