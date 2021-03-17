from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from django.core.files.storage import default_storage

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
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse('Failed to add', safe=False)

    elif request.method=='PUT':
        platform_data = JSONParser().parse(request)
        platform = Platform.objects.get(id=platform_data['id'])
        platform_serializer = PlatformSerializer(platform, data=platform_data)
        if platform_serializer.is_valid():
            platform_serializer.save()
            return JsonResponse('Update Successful', safe=False)
        else:
            JsonResponse('Failed to Update', safe=False)

    elif request.method=='DELETE':
        platform = Platform.objects.get(id=id)
        platform.delete()
        return JsonResponse('Delete Successfully', safe=False)


@csrf_exempt
def routeApi(request, id=0):
    if request.method == 'GET':
        routes = Route.objects.all()
        route_serializer = RouteSerializer(routes, many=True)
        return JsonResponse(route_serializer.data,safe=False)
    elif request.method=='POST':
        route_data=JSONParser().parse(request)
        route_serializer = RouteSerializer(data=route_data)
        if route_serializer.is_valid():
            route_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse('Failed to add', safe=False)

    elif request.method=='PUT':
        route_data = JSONParser().parse(request)
        route = Route.objects.get(id=route_data['id'])
        route_serializer = RouteSerializer(route, data=route_data)
        if route_serializer.is_valid():
            route_serializer.save()
            return JsonResponse('Update Successful', safe=False)
        else:
            JsonResponse('Failed to Update', safe=False)

    elif request.method=='DELETE':
        route = Route.objects.get(id=id)
        route.delete()
        return JsonResponse('Delete Successfully', safe=False)

@csrf_exempt
def stopApi(request, id=0):
    if request.method == 'GET':
        stops = Stop.objects.all()
        stop_serializer = StopSerializer(stops, many=True)
        return JsonResponse(stop_serializer.data,safe=False)
    elif request.method=='POST':
        stop_data=JSONParser().parse(request)
        stop_serializer = StopSerializer(data=stop_data)
        if stop_serializer.is_valid():
            stop_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse('Failed to add', safe=False)

    elif request.method=='PUT':
        stop_data = JSONParser().parse(request)
        stop = Stop.objects.get(id=stop_data['id'])
        stop_serializer = StopSerializer(stop, data=stop_data)
        if stop_serializer.is_valid():
            stop_serializer.save()
            return JsonResponse('Update Successful', safe=False)
        else:
            JsonResponse('Failed to Update', safe=False)

    elif request.method=='DELETE':
        stop = Stop.objects.get(id=id)
        stop.delete()
        return JsonResponse('Delete Successfully', safe=False)


@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)