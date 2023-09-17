from django.shortcuts import render
from app.models import *
def home(request):
    if request.GET.get("name"):
        name=request.GET.get("name")
        user(username=name).save()
        name=user.objects.all()
        return render(request,'home.html',{'user':name})    
    else:
        name=user.objects.all()
        return render(request,'home.html',{'user':name})
def navbar(request):
    return render(request,'navbar.html')