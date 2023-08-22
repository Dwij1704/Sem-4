from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
# def home(request):
#     return HttpResponse("Hello, World!")
# def room(request):
#     return HttpResponse("This is a room")
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('myapp.urls')),
    
]
