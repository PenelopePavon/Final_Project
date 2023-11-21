from django.urls import path
from .views import index

urlpatterns = [
    # ... otras rutas si las tienes
    path('', index, name='index'),
]
