import websocket
import time
import json
import random
# from django.test import TestCase

# Create your tests here.
ws=websocket.WebSocket()

ws.connect('ws://127.0.0.1:8000/ws/trackBus')

for i in range(1000):
    time.sleep(0.5)
    ws.send(json.dumps({'value': random.randint(1, 100)}))
