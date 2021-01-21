from channels.generic.websocket import AsyncWebsocketConsumer
import json
from . import views
from asgiref.sync import sync_to_async


class TrackBusConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.groupname='trackBus'
        await self.channel_layer.group_add(
            self.groupname,
            self.channel_name,
        )
        await self.accept() 

    async def disconnect(self, close_code):
        # await self.disconnect()
        pass

    async def receive(self, text_data):
        gps_data = json.loads(text_data)
        lat = gps_data['lat']
        lon = gps_data['lon']
        speed = gps_data['speed']
        bus_reg = gps_data['bus_reg']
        bus_platform = gps_data['platform']

        await self.channel_layer.group_send(
            self.groupname, 
            {
                'type': 'deprocess',
                'latitude': lat,
                'longitude': lon,
                'speed': speed,
                'bus_reg': bus_reg,
                'bus_platform': bus_platform,

            }
        )

        print(f'{lat}, {lon} moving at {speed}m/s')
        


    async def deprocess(self, event):
        latPre = event['latitude']
        lonPre = event['longitude']
        speedPre = event['speed']
        bus_regPre = event['bus_reg']
        bus_platformPre = event['bus_platform']
        await self.send(text_data=json.dumps({'lat': latPre, 'lon':lonPre, 'speed': speedPre, 'bus_reg':bus_regPre, 'bus_platform':bus_platformPre }))