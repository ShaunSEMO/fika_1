from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Platform)
admin.site.register(models.Route)
admin.site.register(models.Stop)
admin.site.register(models.Bus)