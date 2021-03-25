from rest_framework import serializers
from platforms.models import Platform, Route, Stop, Bus

class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = (
            'id', 
            'name'
        )

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = (
            'id', 
            'platform_id',
            'name',
            'route_type',
        )

class StopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stop
        fields = (
            'id', 
            'route_id',
            'location',
            'lat',
            'lon',
        )

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = (
            'id', 
            'route_id',
            'plat_name',
            'bus_reg',
            'lat',
            'lon',
        )