from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from platforms import models
from . import haversine
import folium
import math
from asgiref.sync import sync_to_async
from django.shortcuts import get_object_or_404

@login_required
def platforms(request):
    platforms = models.Platform.objects.all()
    return render(request, 'app/platforms.html', {'platforms': platforms})

@login_required
def show_routes(request, name):
    platform = get_object_or_404(models.Platform, name=name)
    routes = models.Route.objects.filter(platform_id=platform.id)
    m = folium.Map(location=[-26.195246, 28.034088], zoom_start=13)
    m = m._repr_html_()
    return render(request, 'app/routes.html', {'routes':routes, 'map': m, 'platform': platform})


@login_required
def routes(request, name, id):
    platform = get_object_or_404(models.Platform, name=name)
    route = models.Route.objects.get(id=id)

    stops = []
    stops_dict = {}
    
    for stop in models.Stop.objects.filter(route_id=route.id):
        stops.append(stop)

    for stop in stops:
        stops_dict[stop.location] = (float(stop.lat), float(stop.lon))

    if request.method == 'POST':
        
        user_lat = request.POST['user_coords_lat']
        user_lon = request.POST['user_coords_lon']

        float_user_lat = float(user_lat)
        float_user_lon = float(user_lon)

        user_coords = float_user_lat, float_user_lon

        distances = {}

        for loc, coord in stops_dict.items():
            distance = haversine.haversine(user_coords,coord)
            distances[loc] = distance

        for loc, distance in distances.items():
            distances[loc] = distance/1000

        m = folium.Map(location=[float_user_lat, float_user_lon], zoom_start=13)
        tooltip = 'Click for more info'
        folium.Marker([user_lat, user_lon],
                    popup='<strong>Your location</strong>',
                    tooltip=tooltip,
                    icon=folium.Icon(color='blue')).add_to(m),

        stops = models.Stop.objects.filter(route_id=route.id)
        for stop in stops:
            folium.Marker([stop.lat, stop.lon],
                        popup=f'<strong>{stop.location} - Bus Stop</strong>',
                        tooltip=tooltip,
                        icon=folium.Icon(color='red')).add_to(m),

        m = m._repr_html_()
        return render(request, 'app/home.html', {'map':m, 'route':route, 'platform':platform, 'stops': stops, 'distances': distances})
    else:
        m = folium.Map(location=[-26.195246, 28.034088], zoom_start=13)
        
        tooltip = 'Click for more info'

        stops = models.Stop.objects.filter(route_id=route.id)
        for stop in stops:
            folium.Marker([stop.lat, stop.lon],
                        popup=f'<strong>{stop.location} - Bus Stop</strong>',
                        tooltip=tooltip,
                        icon=folium.Icon(color='red')).add_to(m),

        m = m._repr_html_()

        return render(request, 'app/home.html', {'map':m, 'stops':stops, 'route':route, 'platform':platform})
        
def redir(request):
    return redirect('/platforms')

# 