from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from platforms import models
import folium
import math

@login_required
def platforms(request):
    platforms = models.Platform.objects.all()
    return render(request, 'app/platforms.html', {'platforms': platforms})

@login_required
def routes(request, id):
    platform = models.Platform.objects.get(id=id)
    routes = models.Route.objects.filter(platform_id=id)

    def haversine(coord1, coord2):
        R = 6372800  # Earth radius in meters
        lat1, lon1 = coord1
        lat2, lon2 = coord2
        
        phi1, phi2 = math.radians(lat1), math.radians(lat2) 
        dphi       = math.radians(lat2 - lat1)
        dlambda    = math.radians(lon2 - lon1)
        
        a = math.sin(dphi/2)**2 + \
            math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
        
        return 2*R*math.atan2(math.sqrt(a), math.sqrt(1 - a))

    stops = []
    stops_dict = {}
    
    for route in routes:
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
            distance = haversine(user_coords,coord)
            distances[loc] = distance

        for loc, distance in distances.items():
            distances[loc] = distance/1000

        m = folium.Map(location=[float_user_lat, float_user_lon], zoom_start=13)
        tooltip = 'Click for more info'
        folium.Marker([user_lat, user_lon],
                    popup='<strong>Your location</strong>',
                    tooltip=tooltip,
                    icon=folium.Icon(color='blue')).add_to(m),

        for route in routes:
            stops = models.Stop.objects.filter(route_id=route.id)
            for stop in stops:
                folium.Marker([stop.lat, stop.lon],
                            popup=f'<strong>{stop.location} - Bus Stop</strong>',
                            tooltip=tooltip,
                            icon=folium.Icon(color='red')).add_to(m),

        m = m._repr_html_()
        return render(request, 'app/home.html', {'map':m, 'routes':routes, 'platform':platform, 'stops': stops, 'distances': distances})
    else:
        m = folium.Map(location=[-26.195246, 28.034088], zoom_start=13)
        
        tooltip = 'Click for more info'

        for route in routes:
            stops = models.Stop.objects.filter(route_id=route.id)
            for stop in stops:
                folium.Marker([stop.lat, stop.lon],
                            popup=f'<strong>{stop.location} - Bus Stop</strong>',
                            tooltip=tooltip,
                            icon=folium.Icon(color='red')).add_to(m),

        m = m._repr_html_()

        return render(request, 'app/home.html', {'map':m, 'stops':stops, 'routes':routes, 'platform':platform})
        
def redir(request):
    return redirect('/platforms')
