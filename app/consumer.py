from channels.generic.websocket import AsyncWebsocketConsumer
import json

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

        # await self.channel_layer.group_send(
        #     self.groupname, 
        #     {
        #         'type': 'deprocess',
        #         'latitute': lat
        #     }
        # )
        print(f'{lat}, {lon}')
        pass


    # async def deprocess(self, event):
    #     latPre = event['lat']
    #     await self.send(text_data=json.dumps({'lat': latPre }))