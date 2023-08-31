from django.http import HttpResponse
from .models import Movie
from django.shortcuts import render
rooms=[
    {'id': 1, 'name':'Learn Django'},
    {'id': 2, 'name':'Learn Python'},
    {'id': 3, 'name':'Learn Nothing'},
]
def home(request):
    searchTerm=request.GET.get('searchMovie')
    movie=Movie.objects.all()
    return render(request,'home.html',{'rooms':rooms,'searchTerm':searchTerm,'movie':movie})

def room(request):
    return render(request,'room.html')