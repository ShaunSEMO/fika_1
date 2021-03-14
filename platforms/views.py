from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Platform, Route, Stop, Bus
from .serializers import PlatformSerializer, RouteSerializer, StopSerializer, BusSerializer

# Create your views here.

@csrf_exempt
def platformApi(request, id=0):
    if request.method == 'GET':
        platforms = Platform.objects.all()
        platform_serializer = PlatformSerializer(platforms, many=True)
        return JsonResponse(platform_serializer.data,safe=False)
    elif request.method=='POST':
        platform_data=JSONParser().parse(request)
        platform_serializer = PlatformSerializer(data=platform_data)
        if platform_serializer.is_valid():
            platform_serializer.save()
            return JsonResponse("Added Successfully", safe=True)
        return JsonResponse('Failed to add', safe=False)

    elif request.method=='PUT':
        platform_data = JSONParser().parse(request)
        platform = Platform.objects.get(id=platform_data['id'])
        platform_serializer = PlaformSerializer(platform, data=platform_data)
        if platform_serializer.is_valid():
            platform_serializer.save()
            return JsonResponse('Update Successful', safe=True)
        else:
            JsonResponse('Failed to Update', safe=False)

    elif request.method=='DELETE':
        platform = Platform.objects.get(id=id)
        platform.delete()
        return JsonResponse('Delete Successfully', safe=False)
