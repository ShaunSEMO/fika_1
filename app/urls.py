from django.conf.urls import url
from . import views
from django.urls import path
from django.views.generic import TemplateView

app_name = 'app'

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='redir'),
    path('platforms', views.platforms, name='platforms'),
    path('platforms/<int:id>', views.routes, name='routes'),
]
