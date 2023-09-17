from django.shortcuts import render
from django.http import HttpResponse
def home(request):
    name=request.GET.get('gender')
    return render(request, 'home.html', {'name': name})
def about(request):
    return HttpResponse("About Us!")
