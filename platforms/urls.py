from django.conf.urls import url
from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

app_name = 'platform'

urlpatterns = [
    path('platforms/', views.platformApi, name='PlatformAPI'),
    path('platforms/<int:id>', views.platformApi, name='PlatformAPI'),

    path('routes/', views.routeApi, name='RouteAPI'),
    path('routes/<int:id>', views.routeApi, name='RouteAPI'),

    path('stops/', views.stopApi, name='StopAPI'),
    path('stops/<int:id>', views.stopApi, name='StopAPI'),

    path('saveFile/', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)