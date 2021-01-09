from django.db import models

# Create your models here.
class Platform(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.id} _ {self.name}'


class Route(models.Model):
    id = models.AutoField(primary_key=True) 
    platform_id = models.ForeignKey(Platform, on_delete=models.CASCADE, related_name='routes')
    name = models.CharField(max_length=200)
    route_type = models.CharField(max_length=200)
    def __str__(self):
            return f'{self.id}. {self.platform_id}: {self.name}'

class Stop(models.Model):
    id = models.AutoField(primary_key=True)
    route_id = models.ForeignKey(Route, on_delete=models.CASCADE, related_name='stops')
    location = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    def __str__(self):
            return f'{self.id} _ {self.location} _ {self.route_id}'

class Bus(models.Model):
    id = models.AutoField(primary_key=True)
    route_id = models.ForeignKey(Route, on_delete=models.CASCADE, related_name='buses')
    plat_name = models.CharField(max_length=200)
    bus_reg = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    def __str__(self):
            return f'{self.id} _ {self.plat_name} _ {self.bus_reg}'