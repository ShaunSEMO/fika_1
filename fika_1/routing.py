from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
from app import consumer

websocket_urlPattern = [
    path('ws/trackBus', consumer.TrackBusConsumer.as_asgi()),
]

application=ProtocolTypeRouter({
    # 'http':
    'websocket':AuthMiddlewareStack(
        URLRouter(
            websocket_urlPattern
            )
        )
})