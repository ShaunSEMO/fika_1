import websocket
import time
import json
import random
# from django.test import TestCase

# Create your tests here.
ws=websocket.WebSocket()

ws.connect('ws://192.168.43.195:8000/ws/trackBus')

for i in range(1000):
    time.sleep(0.5)
    ws.send(json.dumps({'value': random.randint(1, 100)}))