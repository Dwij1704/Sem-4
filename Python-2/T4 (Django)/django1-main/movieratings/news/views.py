from django.shortcuts import render
from .models import new
def news(request):
    news=new.objects.all().order_by('-date')
    return render(request,'news.html',{'news':news})